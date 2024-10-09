
import { Container, Row, Col,  Image, Form, Button } from 'react-bootstrap';
import "./EmailListing.css";
import emailjs from 'emailjs-com'

function EmailListing() {
  return (
    <Container className="p-4 mt-4 container"  style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', height:'100vh'  }}>
      <Row>
        <Col md={5}>
          <Image
            src="emailList.png" // Replace with the actual image path
            alt="Coach Profile"
            fluid
            // style={{ borderRadius: '15px' }}
          />
        </Col>
        <Col md={7} className='d-flex align-items-center justify-content-center'>

        <Form className="w-75">
            <h4 className='emailText'> Get updates & high-level information right in your mail box</h4>
            <Form.Group>

                <Form.Label>Name:</Form.Label>
           
                <Form.Control placeholder='Enter your name'>
                </Form.Control>

            </Form.Group>

            <Form.Group>
                <Form.Label> Email:</Form.Label>
                <Form.Control type='email' placeholder='Enter your email'></Form.Control>
            </Form.Group>

            <Button className='button d-flex justify-content-center mt-4'>Subscribe</Button>
        </Form>

      
        </Col>
      </Row>
    </Container>
  );
}

export default EmailListing;
