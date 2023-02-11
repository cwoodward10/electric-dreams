import { GenerationServiceClient } from '@stabilitySDK/generation_pb_service';
import {
    DiffusionSampler, 
    ImageParameters, 
    TransformType,
    Request,
    ArtifactType,
    ClassifierParameters,
    SamplerParameters,
    StepParameter,
    ScheduleParameters,
    Prompt,
    FinishReason,
} from '@stabilitySDK/generation_pb';
import { grpc } from "@improbable-eng/grpc-web";

/**
 * Runs the Stability AI base code along with the provided callback function.
 * The callback function is called if/when images are returned. 
 * @param {*} prompt The prompt by which images should be generated on
 * @param {*} callbackFunc Func called if/when images are returned by the api
 * @param {*} apiKey API key against which to bill for the images
 * @param {*} params Additional params for the generaor
 */
export function runGenerator(
    prompt: string, 
    callbackFunc: (args: any) => void, 
    apiKey: string, 
    params: any) {
    // Set up image parameters
    const imageParams = new ImageParameters();
    imageParams.setWidth(params.width || 512);
    imageParams.setHeight(params.height || 512);
    imageParams.addSeed(params.seed || 1234);
    imageParams.setSamples(params.samples || 1);
    imageParams.setSteps(params.steps || 50);

    // Use the `k-dpmpp-2` sampler
    const transformType = new TransformType();
    transformType.setDiffusion(DiffusionSampler.SAMPLER_K_DPMPP_2M);
    imageParams.setTransform(transformType);

    // Use Stable Diffusion 2.0
    const request = new Request();
    request.setEngineId(params.engineId || "stable-diffusion-512-v2-1");
    request.setRequestedType(ArtifactType.ARTIFACT_IMAGE);
    request.setClassifier(new ClassifierParameters());

    // Use a CFG scale of `13`
    const samplerParams = new SamplerParameters();
    samplerParams.setCfgScale(params.cfgScale || 13);

    const stepParams = new StepParameter();
    const scheduleParameters = new ScheduleParameters();

    // Set the schedule to `0`, this changes when doing an initial image generation
    stepParams.setScaledStep(0);
    stepParams.setSampler(samplerParams);
    stepParams.setSchedule(scheduleParameters);

    imageParams.addParameters(stepParams);
    request.setImage(imageParams);

    // Set our text prompt
    const promptText = new Prompt();
    promptText.setText(prompt);

    request.addPrompt(promptText);

    // Authenticate using your API key, don't commit your key to a public repository!
    const metadata = new grpc.Metadata();
    metadata.set("Authorization", "Bearer " + apiKey);

    // Create a generation client
    const generationClient = new GenerationServiceClient(
        "https://grpc.stability.ai",
        {}
    );

    // Send the request using the `metadata` with our key from earlier
    const generation = generationClient.generate(request, metadata);

    // Set up a callback to handle data being returned
    generation.on("data", (data) => {
        data.getArtifactsList().forEach((artifact) => {
            // Oh no! We were filtered by the NSFW classifier!
            if (
                artifact.getType() === ArtifactType.ARTIFACT_TEXT &&
                artifact.getFinishReason() === FinishReason.FILTER
            ) {
                return console.error("Your image was filtered by the NSFW classifier.");
            }

            // Make sure we have an image
            if (artifact.getType() !== ArtifactType.ARTIFACT_IMAGE) return;

            // You can convert the raw binary into a base64 string
            const base64Image = btoa(
            new Uint8Array(artifact.getBinary() as Uint8Array).reduce(
                (data, byte) => data + String.fromCodePoint(byte),
                ""
            ));

            // Here's how you get the seed back if you set it to `0` (random)
            const seed = artifact.getSeed();

            // We're done!
            callbackFunc(
                { 
                    'seed': seed, 
                    'image': base64Image 
                }
            );
        });
    });

    // Anything other than `status.code === 0` is an error
    generation.on("status", (status) => {
        if (status.code === 0) return;
        console.error(
            "Your image could not be generated. You might not have enough credits."
        );
    });
}