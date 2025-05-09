import React from 'react';

function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pb-16 md:pt-32 overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-50 opacity-80 -z-10"></div> */}
      {/* <div 
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-40" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/11511379/pexels-photo-11511379.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundBlendMode: "overlay"
        }}
      ></div> */}
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
        <h1 className="text-3xl md:text-5xl text-orange-600 font-bold mb-4 animate-fadeIn">
          Mahakaleshwar Guide
        </h1>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        <h2 className="text-xl md:text-3xl text-gray-800 font-semibold mb-8 leading-tight max-w-4xl mx-auto">
          Everything you need to know about visiting the sacred Mahakaleshwar Temple
        </h2>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200">
            Plan Your Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;