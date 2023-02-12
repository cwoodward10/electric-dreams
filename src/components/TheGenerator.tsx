import { useState } from "react";

import { runGenerator, GenerationResponse } from '../modules/utility/generator';

function TheGenerator() {
    const [dreamPrompt, setDreamPrompt] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [params, setParams] = useState({});
    /**
     * Array containing {seed, image} objects
     */
    const [generatedImages, setGeneratedImages] = useState(undefined as undefined|GenerationResponse);

    let imageElements = generatedImages ? 
        (
            <ul>
                {
                    generatedImages.artifacts.map((g, index) => {
                        return (
                            <li key={index}>
                                <img src={`data:image/png;base64,${g.base64}`} />
                            </li>
                        )
                    })
                }
            </ul>
        ) : null;

    async function handleOnSubmit(e: any) {
        e.preventDefault();

        // create new images
        const images = await runGenerator(dreamPrompt, apiKey, params);
        setGeneratedImages(images);
    }

    return (
        <div>
            <section className="flex flex-col gap-4">
                <h1>Dare to dream!</h1>
                <form 
                    onSubmit={(e) => handleOnSubmit(e)}
                    className="flex flex-col gap-2"
                >
                    <textarea 
                        name="dream-prompt"
                        className="w-full rounded p-2 resize-none"
                        placeholder={'What are you dreaming of...'} 
                        value={dreamPrompt}
                        onChange={e => setDreamPrompt(e.target.value)}
                    />
                    <input
                        name="api-key"
                        className="w-full rounded p-2"
                        placeholder={'Provide an API Key'}
                        value={apiKey}
                        onChange={e => setApiKey(e.target.value)}
                    />
                    <div className="flex justify-start">
                        <button 
                            type='submit'
                            className="bg-transparent border border-red-400 border-solid inline-block"
                        >
                            Dream!
                        </button>
                    </div>
                </form>
            </section>
            { imageElements }
        </div>
    )
}

export default TheGenerator;