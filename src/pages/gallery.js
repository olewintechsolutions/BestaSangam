import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/best1.jpg';
import image2 from '../assets/besta2.jpeg';
import image3 from '../assets/besta3.jpg';
import image4 from '../assets/besta4.jpg';
import image5 from '../assets/besta5.jpeg';
import image6 from '../assets/besta6.jpg';
import image7 from '../assets/besta7.jpeg';
import image8 from '../assets/besta8.jpeg';
import image9 from '../assets/besta9.png';
import image10 from '../assets/besta10.jpg';
import image11 from '../assets/besta11.jpeg';
import image12 from '../assets/besta12.jpg';
import image13 from '../assets/besta13.jpg';
import image14 from '../assets/besta14.jpg';
import image15 from '../assets/besta15.jpg';
import image16 from '../assets/besta16.jpg';
import image17 from '../assets/besta16.png';
import image18 from '../assets/besta17.png';
import image19 from '../assets/besta18.jpg';
import image20 from '../images/besta.png';
import image21 from '../images/bestasangam.jpeg';
import image22 from '../images/besta2.png';
import image23 from '../images/icon.png';
import image24 from '../images/logo1.png';
import image25 from '../images/logo2.jpg';
import image26 from '../images/marriage2.jpg';

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold bg-body-secondary ">Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col md={3} sm={6} className="mb-4" key={index}>
            <img src={image} alt={`GalleryImage ${index + 1}`} className="img-fluid rounded" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
