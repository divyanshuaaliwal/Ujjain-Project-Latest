    import React from "react";

    import m3 from "../assets/m3.jpeg";
    import m4 from "../assets/m4.png";
    import m5 from "../assets/m5.jpeg";
    import m6 from "../assets/m6.jpeg";

    const data = [
        {
            title: "Mahakaleshwar Darshan by Helicopter",
            duration: "3 Days",
            route: "Indore → Ujjain → Indore",
            price: 15999,
            originalPrice: 19999,
            image: m3,
        },
        {
            title: "Ujjain & Omkareshwar Jyotirling Darshan",
            duration: "7 Days",
            route: "Indore → Omkareshwar → Ujjain → Indore",
            price: 29999,
            originalPrice: 34999,
            image: m4,
        },
        {
            title: "Ujjain Mahakal with Local Sightseeing",
            duration: "2 Days",
            route: "Ujjain → Mahakaleshwar → Kal Bhairav → Ram Ghat → Sandipani Ashram",
            price: 8999,
            originalPrice: 11999,
            image: m5,
        },
        {
            title: "Panch Jyotirling Yatra by Helicopter",
            duration: "4 Days",
            route: "Ujjain → Omkareshwar → Bhimashankar → Trimbakeshwar → Grishneshwar",
            price: 19999,
            originalPrice: 22999,
            image: m6,
        },
        // add more if needed
    ];

    const Tours = () => {
        return (
            <div className=" w-[95vw] mx-auto px-4 md:px-6">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    {" "}
                    Mahakaleshwar Yatra Tour Helicopter Packages
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((pkg, idx) => (
                        <Card key={idx} {...pkg} />
                    ))}
                </div>
            </div>
        );
    };

    const Card = ({
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
        showIcons = true,
    }) => {
        return (
            <div
                className={`rounded-2xl shadow-lg max-w-sm ${bgColor} ${textColor} transition-all`}
            >
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                )}
                <div className="p-4">
              
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
                    <span className="line-through text-sm ml-2 opacity-70">
                        ₹{originalPrice}
                    </span>
                </div>

                <div className="flex gap-2 mb-4">
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                        Read More
                    </button>
                    <button className="bg-orange-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition">
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
            </div>
        );
    };

    export default Tours;