import { MAX_WIDTH } from "../../App";

import HeroCarousel from "./support/hero/HeroCarousel"
import PlotElementSection from "./support/hero/PlotElementsSection";

export default function TheLandingPage() {
    const SECTION_BOTTOM_MARGIN = 120;

    const HERO_SUB_HEADING = 'The simple story generator';

    const heroImageInfo = [
        {
            image: 'https://i.imgur.com/kzdQmom.png', 
            text: 'You tell us what you want to see'
        },
        {
            image: 'https://i.imgur.com/rPZt2Le.png', 
            text: 'We prepare the illustrations'
        },
        {
            image: 'https://i.imgur.com/Bv4Y5Ln.png', 
            text: 'You get a story'
        },
    ]

    return (
        <div className="mx-auto w-full h-full pt-12" >
            {/* hero */}
            <article 
                className='mx-auto w-full px-10 max:px-0 flex flex-col gap-6 md:gap-16'
                style={{maxWidth: `${MAX_WIDTH}px`, marginBottom: `${SECTION_BOTTOM_MARGIN}px`}}
            >
                {/* hero - headline */}
                <section className='w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-col gap-0'>
                        <h1 className='hero'>Electric Dreams</h1>
                        <h3 className='sub-heading hidden md:inline-block'>{HERO_SUB_HEADING}</h3>
                    </div>
                </section>
                {/* hero - images */}
                <section>
                    <HeroCarousel imageUrls={heroImageInfo} />
                </section>
                {/* hero - text */}
                <section className='w-full flex flex-col md:grid md:grid-cols-3 gap-4 md:items-center'>
                    <div className='hidden md:flex flex-col justify-between col-span-2'>
                        <h3 className='section-heading' >From Dreams to reality</h3>
                        <h3 className='section-heading'>in 3 simple steps.</h3>
                    </div>
                    <div className="flex md:hidden flex-col gap-4">
                        <h3 className='sub-heading md:hidden'>{HERO_SUB_HEADING}</h3>
                        <ol className="flex flex-col gap-1">
                            {heroImageInfo.map((hii, index) => {
                                return (
                                    <li key={index} className="text-white m-0">{hii.text}</li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="flex md:flex-col gap-2 items-start">
                        <button>Try it out!</button>
                        <button className='outlined'>See examples</button>
                    </div>
                </section>
            </article>

            {/* tell your tail */}
            <article 
                className='flex justify-center mb-16'
                style={{marginBottom: `${SECTION_BOTTOM_MARGIN}px`}}
            >
                <div 
                    className="w-full bg-surface rounded-none max:rounded-lg p-10 max:p-16 flex"
                    style={{maxWidth: `${MAX_WIDTH + 128}px`}}
                >
                    <PlotElementSection />
                </div>
            </article>

            {/* generative ai */}
            <article 
                className='mx-auto w-full px-10 max:px-0 flex flex-col-reverse gap-6 md:grid md:grid-cols-7 md:gap-10 mb-16'
                style={{maxWidth: `${MAX_WIDTH}px`,  marginBottom: `${SECTION_BOTTOM_MARGIN}px`}}
            >
                <section className="flex flex-col gap-6 max:gap-10 md:col-span-4">
                    <h3 className="section-heading">About Generative AI</h3>
                    <p className="text-white">
                        Electric Dreams uses stability.ai’s <a target="#" href="https://platform.stability.ai/">Stable Diffusion API</a> in order to illustration these stories. Stable Diffusion is one of multiple Text-to-Image AI models out there now. We use it because we found it to be a good product and easy to integrate with.
                    </p>
                    <p className="text-white">
                        It is not a free service however. Because Electric Dreams does not cost money, we ask you to <a target="#" href='https://platform.stability.ai/docs/getting-started/authentication#getting-your-api-key'>bring your own API Key</a>.
                    </p>
                    <button>
                        Learn more
                    </button>
                </section>
                <section 
                    className="md:col-span-3"
                >
                    <a target="#" href="https://stability.ai/">
                        <img 
                            className="mx-auto max:m-0 max:ml-auto w-auto aspect-square" 
                            style={{maxHeight: '496px'}}
                            src='https://i.imgur.com/12VckfU.png' 
                            alt='Stable Diffusion and Stability AI logo' 
                        />
                    </a>
                </section>
            </article>
        </div>
    )
}