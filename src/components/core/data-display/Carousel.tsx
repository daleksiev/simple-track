"use client";

import { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

export function Carousel({ items, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={`carousel w-full ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          id={`slide${index}`}
          className={`carousel-item relative w-full ${
            currentIndex === index ? "block" : "hidden"
          }`}
        >
          {item}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              className="btn btn-circle"
              onClick={() =>
                setCurrentIndex((index - 1 + items.length) % items.length)
              }
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => setCurrentIndex((index + 1) % items.length)}
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
