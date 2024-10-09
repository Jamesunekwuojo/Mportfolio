
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Homepage</h5>
            <ul className="list-unstyled">
              <li><Link to="/podcasts" className="text-light">Podcasts</Link></li>
              <li><Link to="/highlight" className="text-light">Highlights</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><Link to="/testimonials" className="text-light">Testimonials</Link></li>
              <li><Link to="/" className="text-light">Public speaking</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#products" className="text-light">Products</a></li>
              <li><a href="#offers" className="text-light">Offers</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Books</h5>
            <ul className="list-unstyled">
              <li><a href="#new-releases" className="text-light">New Releases</a></li>
              <li><a href="#best-sellers" className="text-light">Best Sellers</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:youremail@example.com" className="text-light">Email Us</a></li>
              <li><a href="#contact-form" className="text-light">Contact Form</a></li>
              <li><a href="#social-media" className="text-light">Follow Us</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Your Name | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
