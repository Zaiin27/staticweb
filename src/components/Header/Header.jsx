import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        {/* Toggle Button for Smaller Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar links on the left */}
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="/personal">Personal</Nav.Link>
            <span className='d-flex align-items-center'>|</span>
            <Nav.Link className='text-primary hover-underline' href="/business">Business</Nav.Link>
          </Nav>

          {/* Navbar links on the right */}
          <Nav>
            <Link className='text-primary hover-underline' to={"/signin"}>Sign in</Link>
            <span className='d-flex align-items-center'>|</span>
            <Link className='text-primary hover-underline' href="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;