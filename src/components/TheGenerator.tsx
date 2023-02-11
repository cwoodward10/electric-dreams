import { useState } from "react";

import { runGenerator } from "../modules/utility/generator";

function TheGenerator() {
    const [dreamPrompt, setDreamPrompt] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [params, setParams] = useState({});
    /**
     * Array containing {seed, image} objects
     */
    const [generatedImages, setGeneratedImages] = useState([]);

    function callbackOnDream(params: any) {
        setGeneratedImages(generatedImages.concat(params));
    }

    function handleOnSubmit(e: any) {
        e.preventDefault();

        // clear old images
        setGeneratedImages([]);

        // create new images
        runGenerator(dreamPrompt, callbackOnDream, apiKey, params)
    }

    return (
        <div className="flex flex-col gap-4">
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
        </div>
    )
}

export default TheGenerator;