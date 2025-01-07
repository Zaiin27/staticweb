import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the CSS file for styling

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="text-white nav">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="text-white fw-bold me-3 logo">
          O2
        </Navbar.Brand>

        {/* Toggle Button for Smaller Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar links */}
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="/shop" className="text-white mx-4">Shop</Nav.Link>
            <Nav.Link href="/why-o2" className="text-white mx-5">Why O2</Nav.Link>
            <Nav.Link href="/help" className="text-white mx-4">Help</Nav.Link>
          </Nav>

          {/* Navbar icons and links */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/myo2" className="text-white mx-2">MyO2</Nav.Link>
            <Nav.Link href="/search" className="text-white mx-2">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2">Search</Nav.Link>
            <Nav.Link href="/cart" className="text-white mx-2">
              <FontAwesomeIcon icon={faShoppingBag} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;