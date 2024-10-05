
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Books.css"

function About() {
  return (
    <Container className="p-4 mt-4 container"  style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', height:'80vh'  }}>
      <Row>
        <Col lg={6} md={5}>
          <Image
            src="/cover1.jpeg" // Replace with the actual image path
            alt="Coach Profile"
            fluid
            // style={{height:'150px'}}
            
          />
        </Col>
        <Col lg={6} md={7}>
          <h2 className="mb-3" style={{ color: '#6244C5' }}>
          Personal Development Expert,, Leadership & Business Coach, Trainer and Consultant.
          </h2>
          <p>
           Abiodun Mustapha is a Personal Development Expert, Business Development Consultant and Founder of Growth Hub Africa, a community of strategic career leaders and business experts.

           He helps professionals and businesses through a process of purpose, productivity and profitability. This he does through speaking engagements, training, personal coaching and writing.
          </p>
          <Button style={{color:'black'}} className="mt-3 border   button">
            <Link id='linkClass' to="/about">Read more</Link>
            
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
