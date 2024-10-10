
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Homepage</h5>
            <ul className="list-unstyled">
              <li><Link to="/podcasts" className="text-light footerLink">Podcasts</Link></li>
              <li><Link to="/highlight" className="text-light footerLink">Highlights</Link></li>
              <li><Link to="/about" className="text-light footerLink">About</Link></li>
              <li><Link to="/testimonials" className="text-light footerLink">Testimonials</Link></li>
              <li><Link to="/resources/oneCoaching" className="text-light footerLink">Public speaking</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to="/shop" className="text-light footerLink">Products</Link></li>
            
            </ul>
          </Col>
          <Col md={3}>
            <h5>Books</h5>
            <ul className="list-unstyled">
              
              <li><Link to="/resources/book" className="text-light footerLink">Best Sellers</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light footerLink">Email <meta /></Link></li>
           
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Abiodun Mustapha | All Rights Reserved</p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
