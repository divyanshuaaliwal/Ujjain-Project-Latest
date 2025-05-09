import React from 'react';
import HotelCard from './HotelCard';
import { hotelData } from './Data/hotelData';

function Hotels() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl text-orange-600 font-bold text-center mb-4">
          Mahakaleshwar Hotels
        </h1>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        <h2 className="text-xl md:text-3xl text-gray-800 font-semibold text-center mb-12 max-w-4xl mx-auto">
          Comfortable stays near the temple for a peaceful pilgrimage experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelData.map((hotel) => (
            <HotelCard 
              key={hotel.id}
              name={hotel.name}
              priceRange={hotel.priceRange}
              distance={hotel.distance}
              rating={hotel.rating}
              image={hotel.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hotels;