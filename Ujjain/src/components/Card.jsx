import React from 'react';
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';

export function Card({
    title = "The History of Mahakaleshwar",
    description = "Explore the rich history and cultural significance of one of India's most revered Jyotirlingas, dating back to ancient times.",
    image = "/api/placeholder/400/320",
    alt = "Card image",
    link = "#",
    date = "May 5, 2025",
    readTime = "5 min read",
    views = "2.4k",
    category = "History",
}) {
    return (
        <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 ring-orange-500 group`}>
            {/* Image container with overlay on hover */}
            <div className="h-52 overflow-hidden relative">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-orange-600">
                    {category}
                </div>

              
            </div>

            <div className="p-6 flex flex-col flex-grow">
                {/* Metadata row */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{readTime}</span>
                    </div>
                    <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>{views}</span>
                    </div>
                </div>

                {/* Title with hover effect */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 flex-grow">{description}</p>

                {/* Read more link */}
                <a
                    href={link}
                    className="group/link inline-flex items-center font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200 mt-auto self-start"
                >
                    <span className="mr-1">Read More</span>
                    <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
            </div>
        </div>
    );
}
