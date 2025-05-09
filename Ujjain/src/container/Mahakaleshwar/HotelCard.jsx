import React from 'react';

function HotelCard({ name, priceRange, distance, rating, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price Range:</span>
            <span className="font-semibold">₹{priceRange}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Distance:</span>
            <span className="font-semibold">{distance} from Temple</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Rating:</span>
            <span className="font-semibold">{rating}/5</span>
          </div>
        </div>
        
        <button 
          className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default HotelCard;