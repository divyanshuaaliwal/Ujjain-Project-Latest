import React from 'react';
import { Star, MapPin, Wifi, Coffee, Utensils, Heart } from 'lucide-react';

function HotelCard({ 
  name = "Shri Mahakal Residency", 
  priceRange = "1,500 - 3,000", 
  distance = "0.3 km", 
  rating = 4.7,
  reviews = 186,
  amenities = ["Free WiFi", "Breakfast", "Restaurant"],
  offerPercent = 15,
  image = "/api/placeholder/400/320" 
}) {
  // Convert rating to an array for stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group">
      {/* Wishlist heart button */}
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Discount badge */}
      {offerPercent > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {offerPercent}% OFF
        </div>
      )}

      {/* Image container */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        {/* Hotel name and rating */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={
                    i < fullStars
                      ? "fill-yellow-400 text-yellow-400" 
                      : i === fullStars && hasHalfStar
                      ? "text-yellow-400" 
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 mt-1">{rating} ({reviews} reviews)</span>
          </div>
        </div>
        
        {/* Distance with icon */}
        <div className="flex items-center mb-4 text-gray-700">
          <MapPin size={18} className="text-orange-500 mr-2" />
          <span>{distance} from Mahakaleshwar Temple</span>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {amenities.includes("Free WiFi") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Wifi size={14} className="mr-1 text-orange-500" />
              <span>WiFi</span>
            </div>
          )}
          {amenities.includes("Breakfast") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Coffee size={14} className="mr-1 text-orange-500" />
              <span>Breakfast</span>
            </div>
          )}
          {amenities.includes("Restaurant") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Utensils size={14} className="mr-1 text-orange-500" />
              <span>Restaurant</span>
            </div>
          )}
        </div>
        
        {/* Price and booking */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">Price starts from</span>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-orange-600">₹{priceRange.split(' - ')[0]}</span>
              <span className="text-sm text-gray-500 ml-1">/night</span>
            </div>
          </div>
          
          <button 
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
          >
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
}


export default HotelCard;