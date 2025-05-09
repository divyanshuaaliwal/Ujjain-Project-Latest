import React from "react";
import { Clock, MapPin, Check, Star } from "lucide-react";
const Packages = ({PackageslList}) => {
    return (
        <div className="px-4 py-16 bg-gradient-to-b from-orange-50 to-white">
            <div className="w-[95vw] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
                        Mahakaleshwar Tour Packages
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Curated spiritual journeys for a complete Ujjain experience
                    </p>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded"></div>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {PackageslList.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 relative ${pkg.featured ? 'ring-2 ring-orange-500' : ''}`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    BEST VALUE
                                </div>
                            )}
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Image with gradient overlay */}
                            <div className="relative h-48 bg-gray-200">
                                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-4 text-white">
                                        <h3 className="text-xl font-bold">{pkg.title}</h3>
                                        <div className="flex items-center mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < Math.floor(pkg.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                                                />
                                            ))}
                                            <span className="ml-1 text-sm">{pkg.rating} ({pkg.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Details */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center text-gray-700">
                                        <Clock size={18} className="mr-2 text-orange-500" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <MapPin size={18} className="mr-2 text-orange-500" />
                                        <span>Ujjain, Madhya Pradesh</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex items-end mb-4">
                                    <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                                    <span className="text-sm text-gray-500 line-through ml-2 mb-1">{pkg.originalPrice}</span>
                                    <span className="ml-2 text-sm text-green-600 font-medium">Save {Math.round(((parseFloat(pkg.originalPrice.replace(/[₹,]/g, '')) - parseFloat(pkg.price.replace(/[₹,]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[₹,]/g, ''))) * 100)}%</span>
                                </div>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Package Highlights:</h4>
                                    <ul className="space-y-2">
                                        {pkg.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check size={16} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition flex items-center justify-center">
                                        Book Now
                                    </button>
                                    <button className="flex-1 border border-orange-600 text-orange-600 py-3 rounded-lg font-medium hover:bg-orange-50 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-700 mb-4">Looking for something custom? We can create a personalized itinerary just for you.</p>
                    <button className="bg-white border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">
                        Request Custom Package
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Packages;