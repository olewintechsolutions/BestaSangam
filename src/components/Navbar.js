import React, { useState } from 'react';
import logo from '../images/besta.png';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/navbar.css'; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons

const NavbarMenu = () => {
  const [expanded, setExpanded] = useState(false); 
  return (
    <Navbar expand="lg" className="navbar fixed-top custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
        <img 
        src={logo}
        width='50'
        height='50'
        className= 'd-flex-block  p-1 align-items-center img-fluid'
        alt='besta'
        />{''}
          Besta Sangam Association
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          className="custom-toggler"
        >
          {expanded ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </Navbar.Toggle>        <Navbar.Collapse id="navbar-nav" className='border-0 bg-light text-center rounded-bottom-5 '>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/marriage" className="nav-link">Marriage</Nav.Link>
            <Nav.Link as={NavLink} to="/community" className="nav-link">Community</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className="nav-link">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/members" className="nav-link">Caste List</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
