import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/casseoul.css'; 
import logo5 from '../assets/besta10.jpg';
import logo2 from '../assets/besta13.jpg';
import logo3 from '../assets/besta14.jpg';
import logo4 from '../assets/besta15.jpg';
import logo1 from '../assets/besta18.jpg';

function CarouselSection() {
  const images = [
    { src: logo1 },
    { src: logo2 },
    { src: logo3 },
    { src: logo4 },
    { src: logo5 },
  ];

  return (
    <Carousel className="carouselitem1 my-5 p-3">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={image.src}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>{image.text}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSection;
