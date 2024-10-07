import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipientEmail: '',  // Added recipient email field
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  // Email Js semail send function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
      e.target,            // Form element itself
      'YOUR_USER_ID'       // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully to ' + formData.recipientEmail);
    }, (error) => {
      alert('An error occurred. Please try again.');
      console.log(error.text);
    });

    e.target.reset(); // Reset form after submission
  };



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
            <FontAwesomeIcon className="mx-2" icon={faXTwitter} size="2x" />
            <FontAwesomeIcon className="mx-2" icon={faFacebook} size="2x" />
            <FontAwesomeIcon className="mx-2" icon={faLinkedin} size="2x" />
            <FontAwesomeIcon className="mx-2"  icon={faInstagram} size="2x" />
         
            <hr></hr>

            
        </div>
        </Col>
        <Col className="mt-4">
          <h2>Say hello</h2>
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
                <Button className="button py-3 px-5" type="submit">
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
