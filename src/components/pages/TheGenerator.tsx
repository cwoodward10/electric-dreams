import { useState } from "react";

import { runGenerator, GenerationResponse, GeneratorParams } from '../../modules/utility/generator';

function TheGenerator() {
    const [dreamPrompt, setDreamPrompt] = useState('');
    const [apiKey, setApiKey] = useState('');

    const [params, setParams] = useState({} as GeneratorParams);

    const introPara = 'Welcome to the Electric Dreams Story Illustrator. Here is where the magic happens. In the prompts below, please tell us what you want to see for each plot element. At the end, click "Generate!" and wait for your story to be illustrated!'

    async function handleOnSubmit(e: any) {
        e.preventDefault();

        // create new images
        //const images = await runGenerator(dreamPrompt, apiKey, params);
        //onImagesGenerated(images);
    }

    return (
        <div className="h-full w-full m-auto mt-12">
            <form 
                className="m-auto w-full p-12 flex flex-col gap-10"
                style={{maxWidth: '1000px'}}
                onSubmit={(e) => { handleOnSubmit(e); }}
            >
                {/* intro */}
                <section className="flex flex-col gap-6 p-12">
                    <h1 className="section-heading">Story Illustrator</h1>
                    <p className="text-white">{introPara}</p>
                </section>

                {/* the basics */}
                <section className="flex flex-col gap-6 bg-surface-elevated rounded-lg p-12">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-Changa font-semibold">The Basics</h3>
                        <p className="text-white">General information that we need in order to get you going.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor='api-key'>
                            API Key
                        </label>
                        <input
                            name="api-key"
                            className="w-full rounded p-2"
                            placeholder={'Provide an API Key'}
                            value={apiKey}
                            onChange={e => setApiKey(e.target.value)}
                        />
                        <p className="text-accent-red text-sm">
                            Because Electric Dreams is a free service but Stability AI is not, we ask that you <a target="#" href='https://platform.stability.ai/docs/getting-started/authentication#getting-your-api-key'>bring your own API Key</a>.
                        </p>
                    </div>
                </section>

                {/* the plot */}
                <section className="flex flex-col gap-6 bg-surface-elevated rounded-lg p-12">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-Changa font-semibold">The Plot</h3>
                        <p className="text-white">Now you tell your tale. Tell us what story you have been dreaming up.</p>
                    </div>
                    {/* exposition */}
                    <div>
                        <label htmlFor='exposition'>
                            The Exposition
                        </label>
                        <textarea 
                            name="exposition"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'How your story begins...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                    {/* conflict */}
                    <div>
                        <label htmlFor='conflict'>
                            The Conflict
                        </label>
                        <textarea 
                            name="conflict"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'What the main problem is...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                    {/* rising action */}
                    <div>
                        <label htmlFor='rising-action'>
                            The Rising Action
                        </label>
                        <textarea 
                            name="rising-action"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'The complications that befall our hero are...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                    {/* climax */}
                    <div>
                        <label htmlFor='climax'>
                            The Climax
                        </label>
                        <textarea 
                            name="climax"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'The main drama unfolds like...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                    {/* falling action */}
                    <div>
                        <label htmlFor='falling-action'>
                            The Falling Action
                        </label>
                        <textarea 
                            name="falling-action"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'How things begin to be resolved...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                    {/* resolution */}
                    <div>
                        <label htmlFor='resolution'>
                            The Resolution
                        </label>
                        <textarea 
                            name="resolution"
                            className="w-full rounded p-2 resize-none h-24"
                            placeholder={'And it ends like...'} 
                            value={dreamPrompt}
                            onChange={e => setDreamPrompt(e.target.value)}
                        />
                    </div>
                </section>
                <section className="flex px-12">
                    <button 
                        type='submit'
                    >
                        Generate!
                    </button>
                </section>
            </form>
        </div>
    )
}

export default TheGenerator;