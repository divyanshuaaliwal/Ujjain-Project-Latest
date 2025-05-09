import React from 'react';
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';

function Card({ 
  title = "The History of Mahakaleshwar", 
  description = "Explore the rich history and cultural significance of one of India's most revered Jyotirlingas, dating back to ancient times.",
  image = "/api/placeholder/400/320",
  alt = "Card image",
  link = "#",
  date = "May 5, 2025",
  readTime = "5 min read",
  views = "2.4k",
  category = "History",
  featured = false,
  new: isNew = false
}) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 ${featured ? 'ring-2 ring-orange-500' : ''} group`}>
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
        
        {/* Featured/New badge */}
        {(featured || isNew) && (
          <div className={`absolute top-4 right-4 ${featured ? 'bg-orange-500' : 'bg-blue-500'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {featured ? 'FEATURED' : 'NEW'}
          </div>
        )}
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

// Example component showing multiple cards in a grid
export function CardGrid() {
  const cards = [
    {
      title: "The History of Mahakaleshwar",
      description: "Explore the rich history and cultural significance of one of India's most revered Jyotirlingas, dating back to ancient times.",
      date: "May 5, 2025",
      readTime: "5 min read",
      views: "2.4k",
      category: "History",
      featured: true
    },
    {
      title: "Bhasma Aarti: A Divine Experience",
      description: "Discover the sacred ritual of Bhasma Aarti at Mahakaleshwar Temple and how to participate in this unique spiritual ceremony.",
      date: "May 2, 2025",
      readTime: "4 min read",
      views: "3.1k",
      category: "Rituals",
      new: true
    },
    {
      title: "Top 5 Places to Visit in Ujjain",
      description: "Beyond Mahakaleshwar Temple, explore these must-visit sacred and historical destinations in the ancient city of Ujjain.",
      date: "April 28, 2025",
      readTime: "7 min read",
      views: "1.8k",
      category: "Travel"
    }
  ];

  return (
    <div className="bg-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Ujjain</h2>
          <p className="text-gray-600">Discover the spiritual and cultural heritage of this ancient city</p>
          <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;  