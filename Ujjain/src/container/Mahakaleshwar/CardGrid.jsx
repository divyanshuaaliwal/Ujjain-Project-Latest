import React from 'react';
import Card from './Card';
import { cardData } from './data/cardData';

function CardGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <Card 
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              alt={card.alt}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;