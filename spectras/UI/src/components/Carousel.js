import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="h-auto">
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-[72vh]"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
