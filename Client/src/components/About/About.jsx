
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import "./About.css"

function About() {
  return (
    <Container className="p-4 mt-4 "  style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', height:'80vh' }}>
      <Row>
        <Col md={5}>
          <Image
            src="" // Replace with the actual image path
            alt="Coach Profile"
            fluid
            style={{ borderRadius: '15px' }}
          />
        </Col>
        <Col md={7}>
          <h2 className="mb-3" style={{ color: '#6244C5' }}>
          Personal Development Expert,, Leadership & Business Coach, Trainer and Consultant.
          </h2>
          <p>
           Abiodun Mustapha is a Personal Development Expert, Business Development Consultant and Founder of Growth Hub Africa, a community of strategic career leaders and business experts.

           He helps professionals and businesses through a process of purpose, productivity and profitability. This he does through speaking engagements, training, personal coaching and writing.
          </p>
          <Button  className="mt-3 border   button">
            ABOUT Abiodun
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
