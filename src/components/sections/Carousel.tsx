'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface CarouselSlide {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!slides || slides.length === 0) {
    return <div>No slides available</div>;
  }

  const slide = slides[currentSlide];
  // Auto-alternate orientation: even indices = left, odd indices = right
  const isLeft = currentSlide % 2 === 0;

  return (
    <div className="relative">
      <Image
        src={slide.imageUrl}
        alt={slide.altText}
        width={1200}
        height={675}
        unoptimized
        className="rounded-tr-4xl rounded-bl-4xl w-full"
      />

      {/* Title Box - Top Left or Right based on orientation */}
      <div
        className={`absolute top-0 rounded-tr-4xl rounded-bl-4xl ${
          isLeft ? 'left-0' : 'right-0'
        } bg-red-700 p-6`}
      >
        <h4 className="text-white text-3xl font-extrabold">{slide.title}</h4>
      </div>

      {/* Overlay Text Box - Bottom Center */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-7 text-center">
          <p className="text-red-950 text-xl font-normal leading-7">{slide.description}</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-10 h-10 rounded-full transition-all ${
              index === currentSlide ? 'bg-amber-400' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
