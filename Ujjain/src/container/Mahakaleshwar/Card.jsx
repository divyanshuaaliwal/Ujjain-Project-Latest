import React from 'react';

function Card({ title, description, image, alt, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="h-52 overflow-hidden">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a 
          href={link}
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg inline-block text-center transition-all duration-200 mt-auto self-start"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;