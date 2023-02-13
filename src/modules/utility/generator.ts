export interface GenerationResponse {
	artifacts: Array<{
		base64: string;
		seed: number;
		finishReason: string;
	}>
}

export enum ClipGuidanceOptions {
    "FAST_BLUE" ,
    "FAST_GREEN" ,
    "NONE" ,
    "SIMPLE" ,
    "SLOW" ,
    "SLOWER" ,
    "SLOWEST"
}

export interface GeneratorParams {
    /** How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt) */
    cfgScale?: number,
    clipGuidance?: ClipGuidanceOptions,
    /**
     * Height of the image in pixels. Must be in increments of 64 and pass the following validation:
     * For 768 engines: 589,824 ≤ height * width ≤ 1,048,576 
     * All other engines: 262,144 ≤ height * width ≤ 1,048,576
     */
    height?: number,
    /**
     * Height of the image in pixels. Must be in increments of 64 and pass the following validation:
     * For 768 engines: 589,824 ≤ height * width ≤ 1,048,576 
     * All other engines: 262,144 ≤ height * width ≤ 1,048,576
     */
    width?: number,
    /** Number of images to generate */
    samples?: number,
    /** Random noise seed (omit this option or use 0 for a random seed) */
    seed?: number,
    /** Number of diffusion steps to run (min: 10) */
    steps?: number
}

export async function runGenerator(
    prompt: string, 
    apiKey: string, 
    params: GeneratorParams) {
        const engineId = 'stable-diffusion-512-v2-0';
        const apiHost = 'https://api.stability.ai'
        
        if (!apiKey) {
            console.error("Please provide an API key.");
            return;
        }
        
        const response = await fetch(
            `${apiHost}/v1beta/generation/${engineId}/text-to-image`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    text_prompts: [
                        {
                            text: prompt,
                        }
                    ],
                    cfg_scale: params.cfgScale ?? 7,
                    clip_guidance_preset: params.clipGuidance ?? ClipGuidanceOptions.NONE,
                    height: params.height ?? 512,
                    width: params.width ?? 512,
                    samples: params.samples ?? 1,
                    seed: params.seed ?? 0,
                    steps: params.steps ?? 10,
                })
            }
        );
        
        if (!response.ok) {
            console.error(`Non-200 response: ${await response.text()}`);
            return;
        }
        
        const responseJSON = await response.json() as GenerationResponse;
        return responseJSON;
}
