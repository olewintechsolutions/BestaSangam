import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../images/besta2.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <img
              src={logo}
              alt="Besta"
              style={{
                width: '75px',
                height: '75px',
                borderRadius: '5px',
              }}
            />
            <h6 className="  mt-2">
              Besta Sangam Association 
              <span className="fs-6 text-light d-block">A Community Service</span>
            </h6>
          </Col>
          
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h6 className="text-warning">Services</h6>
            <ul className="list-unstyled">
              <li><a href="/marriage" className="text-light fs-6  text-decoration-none">Profiles</a></li>
              <li><a href="/community" className="text-light fs-6  text-decoration-none"> Community Services</a></li>
              <li><a href="/contact" className="text-light fs-6  text-decoration-none">Contact Us</a></li>
              <li><a href="/about" className="text-light fs-6  text-decoration-none">Our Values</a></li>
              <Link to="/privacy">Our Policy</Link>
            </ul>
       
          </Col>
          
       
          
          <Col xs={12} md={3}>
            <h5 className="text-warning">Contact Us</h5>
            <address className="mb-0">
              Madanapalle, Annamayya - Dist<br />
              Andhra Pradesh - India<br />
              <a href="tel:+1234567890" className="text-reset text-decoration-none">Phone: +91 94414 51041</a><br />
              <a href="mailto:bestasangamassociation@gmail.com" className="text-reset text-decoration-none">Email: bestasangamassociation@gmail.com</a>
            </address>
          </Col>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <p className="text-warning">Connect on WhatsApp</p>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
        
              <li>
                <a href="https://wa.me/+919441451041" aria-label="WhatsApp" className="fs-3 text-light">
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
