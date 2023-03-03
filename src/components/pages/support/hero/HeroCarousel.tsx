import ImageCarousel from "../../../library/ImageCarousel"

type props = {
    imageUrls: {
        image:string,
        text: string,
    }[]
}
export default function HeroCarousel({imageUrls}: props) {
    return (
        <div className='w-full'>
            {/* dk */}
            <div className='w-full overflow-hidden hidden md:grid md:grid-cols-3 gap-4'>
                {imageUrls.map((i, index) => {
                    return (
                        <div className='flex flex-col flex-shrink gap-2 rounded-lg overflow-hidden' key={index}>
                            <img 
                                src={i.image} 
                                alt={`hero image ${index}`} 
                            />
                            <p className="text-white" >{i.text}</p>
                        </div>
                    )
                })}
            </div>
            {/* mobile */}
            <div className="flex md:hidden">
                <ImageCarousel imageUrls={imageUrls.map(i => i.image)} />
            </div>
        </div>
    )
}