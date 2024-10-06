import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css"
const Contact = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
        <div className="sideDiv p-4">
            <p>My Office:</p>
            <h3>Lagos Nigeria</h3>
            <hr></hr>

            <p>Mobile No:</p>
            <h3>+234-814-856-0609
            </h3>
            <hr></hr>


            <p>Email:</p>
            <h3>contact@abiodunmustapha.com</h3>
            <hr></hr>

            <p>Connect with me on:</p>
            <h3>Lagos Nigeria</h3>
            <hr></hr>

            
        </div>
        </Col>
        <Col className="mt-4">
          <Form
          >
            <Row className="g-3">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                  <Form.Label>Name:</Form.Label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                 <Form.Label>Email:</Form.Label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    name="subject"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                  />
                 <Form.Label>Subject:</Form.Label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Leave a message here"
                    style={{ height: "100px" }}
                  />
                  <Form.Label >Message</Form.Label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Button className="btn btn-primary py-3 px-5" type="submit">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
