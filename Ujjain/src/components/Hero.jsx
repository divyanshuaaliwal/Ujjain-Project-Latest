import { ChevronLeft, ChevronRight, Mail   } from 'lucide-react';
import React, { useState } from 'react';
// import {VideoCouresel} from "./VideoCourosel"
const TourCard = ({
    image,
    title,
    subtitle,
    duration,
    route,
    price,
    originalPrice,
    itinerary,
    bgColor = "bg-white",
    textColor = "text-black",
    showHelicopter = false,
    showIcons = true
}) => {
    return (
        <div className={`rounded-2xl shadow-lg p-4 m-4 max-w-sm ${bgColor} ${textColor} transition-all`}>
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
            )}
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            <p className="text-sm opacity-80 mb-2">{subtitle}</p>

            <div className={`flex justify-between text-sm opacity-80 mb-2`}>
                <span>🕒 {duration}</span>
                <span>📍 {route}</span>
            </div>

            {itinerary && (
                <div className="text-blue-500 text-sm mb-2 cursor-pointer hover:underline">
                    📋 Complete Itinerary
                </div>
            )}

            <div className="mb-3">
                <span className="text-lg font-bold text-green-500">₹{price}/-</span>
                <span className="line-through text-sm ml-2 opacity-70">₹{originalPrice}</span>
            </div>

            <div className="flex gap-2 mb-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Read More
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition">
                    Enquiry Now
                </button>
            </div>

            {showIcons && (
                <div className="flex flex-wrap gap-2 text-sm opacity-90">
                    <span>🎯 Highlights</span>
                    <span>🏨 Hotel</span>
                    {showHelicopter && <span>🚁 Helicopter</span>}
                    <span>🍽️ Meals</span>
                    <span>🗺️ Sightseeing</span>
                </div>
            )}
        </div>
    );
};



const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/NLzl7AQZzf8?si=iYrwlbi6Re94IfhP&autoplay=1",
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/NLzl7AQZzf8?si=iYrwlbi6Re94IfhP&autoplay=1",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div>
            {/* Hero Section with Slider */}
            <div className="relative h-96 md:h-[600px] overflow-hidden">
                
                {/* Overlay */}
                {/* White Blur Overlay */}
                <div className="absolute inset-0 bg-opacity-1 backdrop-blur-sm z-20"></div>

                  {/* Hero Content */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Chardham Yatra <span className="text-red-600">2025</span>
                    </h1>
                    <p className="text-xl md:text-3xl mb-8">Yamunotri | Gangotri | Kedarnath | Badrinath</p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a href="#" className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 py-3 px-6 rounded-md text-lg">
                            Group Tour
                        </a>
                        <a href="#" className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 py-3 px-6 rounded-md text-lg">
                            Helicopter Tour
                        </a>
                        <a href="#" className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 py-3 px-6 rounded-md text-lg">
                            Fixed Departure
                        </a>
                        <a href="#" className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 py-3 px-6 rounded-md text-lg">
                            Luxury Tour
                        </a>
                    </div>

                    <a href="#" className="bg-red-600 hover:bg-red-700 py-4 px-8 rounded-md text-xl font-bold">
                        Online Booking Available
                    </a>

                    <p className="mt-6 text-lg">Special care for Senior Citizens at all times during the Yatra.</p>
                </div>
            
              

                {/* Slider Videos */}
                <div className="absolute inset-0 h-[73vh]">
                    {
                        slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={slide.videoUrl + '&autoplay=1&mute=1'}
                                    title={`Video ${slide.id}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))
                    }
                </div>

                {/* Slider Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 z-30"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 z-30"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

                {/* <VideoCouresel/> */}

              {/* Tour Packages Section */}
              <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Chardham Yatra Tour Helicopter Packages
                        <div className="w-64 h-1 bg-red-600 mx-auto mt-2"></div>
                    </h2>
                    <p className="text-center mb-8 mt-4">
                        Get the most effective and the best Char Dham Yatra packages.
                        <a href="#" className="text-blue-600 hover:underline ml-2">Read More</a>
                    </p>

                    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TourCard
            image="/images/chardham-heli.jpg"
            title="Chardham Yatra"
            subtitle="By Helicopter"
            duration="6 Days & 5 Nights"
            route="Dehradun → Yamunotri → Gangotri"
            price="2,25,000"
            originalPrice="2,30,000"
            itinerary
            bgColor="bg-blue-900"
            textColor="text-white"
            showHelicopter
        />
        <TourCard
            image="/images/chardham-delhi.jpg"
            title="Chardham Yatra"
            subtitle="From Delhi"
            duration="11 Days & 10 Nights"
            route="Delhi → Rishikesh → Yamunotri"
            price="40,900"
            originalPrice="45,000"
            itinerary
            bgColor="bg-white"
            textColor="text-black"
        />
        <TourCard
            image="/images/chardham-haridwar.jpg"
            title="Chardham Yatra"
            subtitle="From Haridwar"
            duration="10 Days & 9 Nights"
            route="Haridwar → Yamunotri → Gangotri"
            price="40,300"
            originalPrice="45,000"
            itinerary
            bgColor="bg-white"
            textColor="text-black"
        />
        <TourCard
            image="/images/badrinath-kedarnath.jpg"
            title="Badrinath Kedarnath"
            subtitle="By Helicopter"
            duration="1 Day (Same Day)"
            route="Dehradun → Kedarnath → Badrinath"
            price="1,25,000"
            originalPrice="1,30,000"
            itinerary
            bgColor="bg-blue-900"
            textColor="text-white"
            showHelicopter
        />
    </div>
</div>

                </div>
            </div>

                {/* Chat Button - Fixed */}
                <div className="fixed bottom-6 right-6 z-50">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg">
                        <Mail size={24} />
                    </button>
                </div>
        </div>
    );
}

export default Hero;


          