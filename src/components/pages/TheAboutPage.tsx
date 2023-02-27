export default function TheAboutPage() {
    return (
        <article className="w-full h-full relative flex flex-grow items-center p-4 pb-8 sm:p-8 lg:p-12" >
                {/* main */}
                <section 
                    className="z-10 flex flex-col gap-4 border-4 border-solid border-accent-yellow bg-surface p-4 py-8 sm:p-8 lg:p-12 mx-auto w-full h-full rounded-2xl lg:rounded-3xl"
                    style={{maxWidth: '1336px'}}
                >
                    <h1 className="hero text-accent-yellow lg:whitespace-nowrap">
                        About
                    </h1>
                    <p>Content to Come!</p>
                </section>
        </article>
    )
}