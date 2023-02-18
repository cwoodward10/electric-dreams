import { useEffect, useState } from 'react';

export default function TheBackgroundImages() {
    const bgImages = [
        'https://i.imgur.com/WCOyC7M.png',
        'https://i.imgur.com/Bv4Y5Ln.png',
        'https://i.imgur.com/rPZt2Le.png'
    ]

    const [bgImageIndex, setBgImageIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const nextIndex = bgImageIndex >= (bgImages.length - 1) ? 0 :  bgImageIndex + 1;
    //         setBgImageIndex(nextIndex);
    //     }, 3000);

    //     return (() => {
    //         clearInterval(interval);
    //     })
    // })

    const varStyle={
        backgroundImage: `url(${bgImages[bgImageIndex]})`,
    }

    return (
        <div 
            id='bg-images'
            className='fixed top-0 left-0 z-0 h-screen w-screen bg-center bg-no-repeat bg-cover'
            style={varStyle}
        />
    )
}