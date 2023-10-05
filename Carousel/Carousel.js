import React, { useState } from 'react';
import './Caro.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>
        Previous
      </button>
      <img src={images[currentImageIndex]} alt="Carousel" />
      <button className="next" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
