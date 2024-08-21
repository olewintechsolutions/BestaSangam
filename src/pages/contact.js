import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../images/bestasangam.jpeg';
import logo1 from '../images/member.jpg'
const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
      <Card  className="text-center mb-4" style={{ width: '18rem' }}>
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
        <Col md={4}>
        <Card.Img variant="top" src= {logo} />
        <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                <strong>Name:</strong> Ramana <br />
                <strong className='text-primary' >Email:</strong> bestasangamassociation@gmail.com <br />
                <strong>Phone:</strong> +91 94414 51041
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     
      </Row>
    </Container>
  );
};

export default Contact;
