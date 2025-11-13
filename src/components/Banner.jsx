import React, { useState, useEffect } from 'react';

import waterlogging from '../assets/waterlogging.jpg';
import garbage from '../assets/garbage.jpg';
import brokenFootpath from '../assets/brokenFootpath.jpg';

const images = [
    { src: waterlogging, alt: '' },
    { src: garbage, alt: '' },
    { src: brokenFootpath, alt: '' },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalTime = 4000; 

    useEffect(() => {
        let sliderInterval;

       
        if (!isHovered) {
            sliderInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    (prevIndex + 1) % images.length
                );
            }, intervalTime);
        }

      
        return () => clearInterval(sliderInterval);
    }, [isHovered, intervalTime]); 

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto my-8">
            <div 
                className="overflow-hidden rounded-xl shadow-2xl relative"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
             
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-full">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-96 object-cover" 
                            />
                            
                        </div>
                    ))}
                </div>

                <button 
                    onClick={goToPrev} 
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                >
                    &lt;
                </button>
                <button 
                    onClick={goToNext} 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                >
                    &gt;
                </button>

               
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                currentIndex === index ? 'bg-white scale-110' : 'bg-gray-400 opacity-70'
                            }`}
                        ></button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Banner;


