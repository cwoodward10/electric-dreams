export default function TheLandingPage() {
    const subHeading =(customClasses: string) => (
        <h1 className={`sub-heading text-accent-yellow ${customClasses}`}>
            The Simple Story Illustrator
        </h1>
    )

    const mainParaCopy = 'Take a simple idea and turn it into an illustrated story using Electric Dreams’ story generator.  The whole process is simple to use. You tell us what happens at each of the 6 main plot points. We provide you with corresponding illustrations. At the end you come away with an illustrated short story. '
    const storyCopy = 'It was a dark and stormy night in this mountain town of theirs.';

    return (
        <article className="w-full h-full md:max-h-screen md:overflow-hidden relative flex items-center p-4 pb-8 sm:p-8 lg:p-12" >
            {/* main */}
            <section 
                className="z-10 flex flex-col gap-4 border-4 border-solid border-accent-yellow bg-surface p-4 py-8 sm:p-8 lg:p-12 m-auto w-full h-full rounded-2xl lg:rounded-3xl"
                style={{maxWidth: '1336px'}}
            >
                <h1 className="hero text-accent-yellow lg:whitespace-nowrap">
                    Electric Dreams
                </h1>

                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:gap-6">
                    {/* text column */}
                    <section className="order-2 md:order-1 flex flex-col gap-4 lg:gap-6">
                        {subHeading('hidden md:inline-block')}
                        <p className="text-accent-yellow">{mainParaCopy}</p>
                        <div className="flex flex-row gap-2 lg:gap-4">
                            <button>Try it out!</button>
                            <button className="outlined">See examples</button>
                        </div>
                    </section>
                    
                    {/* image column */}
                    <section className="order-1 md:order-2 flex flex-col gap-4">
                        {subHeading('md:hidden')}
                        <div className="relative w-full flex justify-end">
                            <img 
                                className="h-auto"
                                src='https://i.imgur.com/kzdQmom.png' 
                                alt='story' 
                            />
                            <div 
                                className="absolute top-3 right-3 p-2 rounded-sm drop-shadow-lg bg-secondary text-primary text-xs md:text-sm"
                                style={{maxWidth: '80%',}}
                            >
                                <p>{storyCopy}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </article>
    )
}