import { useState } from 'react';
type props = {
    imageUrls: string[]
}   

export default function ImageCarousel({imageUrls}: props){
    const [currentImage, setCurrentImage] = useState(0);

    const controls = imageUrls.map((image, index) => {
        const isActive = currentImage === index;
        return (
            <div
                className={`w-2 h-2 rounded-full ${isActive ? 'bg-accent-red' : 'bg-accent-yellow'}`}
                key={index}
                onClick={() => setCurrentImage(index)}
            />
        )
    })

    return (
        <div className='relative w-full h-full rounded-md overflow-hidden'>
            <img 
                className='w-full h-full'
                src={imageUrls[currentImage]} 
                alt='electric dream image'
            />
            <div className='absolute bottom-2 left-2 right-2 flex justify-center gap-2'>
                {controls}
            </div>
        </div>
    )
}