import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Your custom CSS if any
import communityImg1 from '../images/bestasangam.jpeg';
import communityImg2 from '../images/marriage2.jpg';
import communityImg4 from '../assets/besta3.jpg';
import communityImg5 from '../assets/besta18.jpg';
import logo1 from '../images/member.jpg'
const CommunityGrid = () => {
  const communityData = [
    { imgSrc: communityImg1, text: 'Join us for the upcoming community event.' },
    {  imgSrc: communityImg2, text: 'Collaborate and Find Best Match  with local members.' },
    {  imgSrc: communityImg4, text: 'Explore fun activities and meetups.' },
    { imgSrc: communityImg5, text: 'Contribute to our projects and programs.' },
  ];

  return (
    <Container className="py-5 " >
      <h2 className="text-center mb-4">Community </h2>
      <Row className='mx-auto d-flex align-content-center'>
      <Card  className="text-center mb-4" style={{ width: '18rem', margin:'auto' }}>
      <Card.Header> Besta Sangam President</Card.Header>
      <Card.Img variant="top" src={logo1} />
      <Card.Body>
      <Card.Title> Besta Sangam Association</Card.Title>
                <Card.Text>  Madanapalli - Annamayya District </Card.Text>
                <Card.Text>  Andhra Pradesh </Card.Text>
                <Card.Text>Community Member </Card.Text>
                <Card.Text>Contact :- +91 94414 51041 </Card.Text>

      </Card.Body>
    </Card>
      </Row>
      <Row className="g-4">
        {communityData.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img variant="top" src={item.imgSrc} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CommunityGrid;
