import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../assets/besta3.jpg';
import logo2 from '../assets/besta4.jpg';
import logo3 from '../assets/besta9.png';
import logo5 from '../assets/besta16.jpg';
import logo7 from '../assets/besta17.png';
import '../styles/carseoul1.css';
const CarouselSection1 = () => {
  const images = [logo1, logo2, logo3, logo5,logo7];

  return (
    <Carousel className="carousel-section col-9  my-4 p-3 mx-auto" interval={1000} >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSection1;
