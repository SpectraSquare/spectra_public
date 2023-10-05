import React from 'react';
import Carousel from './Carousel';

function Photos() {
  const images = [
    './SlidesPic/pic1.jpg',
    './SlidesPic/pic2.jpg',
    './SlidesPic/pic3.jpg',
    './SlidesPic/pic4.jpg',
    './SlidesPic/pic5.jpg',
    './SlidesPic/pic6.jpg',
    './SlidesPic/pic7.jpg'
     //Add more images with correct path  
  ];

  return (
    <div className="App">
      <h1 className='Header'>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default Photos;
