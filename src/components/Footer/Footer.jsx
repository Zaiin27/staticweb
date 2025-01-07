import React  from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faNetworkWired, faUser, faTruck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#" className="footer-link"> 
                  <FontAwesomeIcon icon={faStore} className="me-2" />
                  Find Link store
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="footer-link"> 
                  <FontAwesomeIcon icon={faNetworkWired} className="me-2" />
                  Check our network
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="footer-link"> 
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Sign in to My O2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="footer-link"> 
                  <FontAwesomeIcon icon={faTruck} className="me-2" />
                  Track my order
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="footer-link"> 
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
                  Search
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={12} md={3}>
            <h5>Popular in shop</h5>
            <ul className="list-unstyled">
              <li>iPhone 16 Pro Max</li>
              <li>iPhone 16 Pro</li>
              <li>iPhone 16</li>
              <li>Apple Watch Series 10</li>
              <li>Apple iPad Pro 13 inch M4</li>
              <li>Samsung Galaxy S24 Ultra</li>
              <li>Samsung Galaxy S24</li>
              <li>Samsung Galaxy Z Flip6</li>
              <li>Google Pixel 9 Pro XL</li>
              <li>Google Pixel 9 Pro</li>
              <li>SIM Only Deals</li>
              <li>Virgin Media broadband deals</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h5>Help and Support</h5>
            <ul className="list-unstyled">
              <li>Help home</li>
              <li>Contact us</li>
              <li>My O2</li>
              <li>Collection and delivery</li>
            </ul>
            <h5>Shop</h5> 
            <ul className="list-unstyled">
              <li>Phones</li>
              <li>Tablets</li>
              <li>Pay Monthly Sim</li>
              <li>Collection and delivery</li>
              <li>Virgin Media O2 Joint Venture</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li>Phones</li>
              <li>Tablets</li>
              <li>Pay Monthly Sim</li>
              <li>Collection and delivery</li>
              <li>Virgin Media O2 Joint Venture</li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col xs={12} md={6}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="#" className="text-white">
                  <FontAwesomeIcon icon={faFacebookF} className="me-2" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} className="me-2" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="text-white">
                  <FontAwesomeIcon icon={faYoutube} className="me-2" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-center text-md-start">
              <Link href="#" className="text-white">About O2</Link> |
              <Link href="#" className="text-white">Better Connections Plan</Link> |
              <Link href="#" className="text-white">Careers</Link> |
              <Link href="#" className="text-white">News & PR</Link> |
              <Link href="#" className="text-white">Sponsorship</Link> |
              <Link href="#" className="text-white">Virgin Media and O2</Link>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="text-center">
              <Link href="#" className="text-white">Accessibility</Link> |
              <Link href="#" className="text-white">Terms & Conditions</Link> |
              <Link href="#" className="text-white">Privacy policy</Link> |
              <Link href="#" className="text-white">Cookie policy</Link> |
              <Link href="#" className="text-white">Modern Slavery Statement</Link>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="text-center">
              ©2024 Telefónica UK Limited
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;