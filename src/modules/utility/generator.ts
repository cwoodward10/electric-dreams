export interface GenerationResponse {
	artifacts: Array<{
		base64: string;
		seed: number;
		finishReason: string;
	}>
}

export async function runGenerator(
    prompt: string, 
    apiKey: string, 
    params: any) {
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
                    clip_guidance_preset: params.clipGuidance ?? 'FAST_BLUE',
                    height: params.height ?? 512,
                    width: params.width ?? 512,
                    samples: params.samples ?? 1,
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
