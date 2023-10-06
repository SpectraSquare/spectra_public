import React from "react";
import Carousel from "./Carousel"; // Adjust the import path

const CarouselComp = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative">
      <Carousel slides={slides} />
    </div>
  );
};

export default CarouselComp;
