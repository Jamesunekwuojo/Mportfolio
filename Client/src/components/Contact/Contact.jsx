import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicId = import.meta.env.VITE_PUBLIC_ID 

console.log(serviceId, templateId, publicId); // Add this line to check if they are correctly loaded


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      serviceId,   // Replace with your EmailJS service ID
      templateId,  // Replace with your EmailJS template ID
      e.target,            // Form element itself
      publicId     // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully to ' + formData.recipientEmail);
      toast.success('Message sent successfully to ' + formData.recipientEmail);
      console.log("message sent successfully", result)
    }, (error) => {
      alert('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again')
      console.log(error)
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
            <h3 className="subTexts">Lagos Nigeria</h3>
            <hr></hr>

            <p>Mobile No:</p>
            <h3 className="subTexts">+234-814-856-0609
            </h3>
            <hr></hr>


            <p>Email:</p>
            <h3 className="subTexts">contact@abiodunmustapha.com</h3>
            <hr></hr>

            <p>Follow me on:</p>

            <Link to = "https://x.com/abiodun_mustaph"  target="blank" className="contactLink"><FontAwesomeIcon className="mx-2" icon={faXTwitter} size="2x" /></Link>

            <Link to="https://web.facebook.com/officialabiodunmustapha/" target="blank" className="contactLink"><FontAwesomeIcon className="mx-2" icon={faFacebook} size="2x" /></Link>

            <Link to="https://www.linkedin.com/in/abiodunmustapha/"  target="blank" className="contactLink"><FontAwesomeIcon className="mx-2" icon={faLinkedin} size="2x" /></Link>

            <Link to="https://www.instagram.com/iamabiodunmustapha"  target="blank" className="contactLink"> <FontAwesomeIcon className="mx-2"  icon={faInstagram} size="2x" /></Link>

            <Link to="https://www.youtube.com/channel/UC4KuhzkY8SNEbEUD78LBo6w?"  target="blank" className="contactLink"> <FontAwesomeIcon className="mx-2"  icon={faYoutube} size="2x" /></Link>
           
         
            <hr></hr>

            
        </div>
        </Col>
        <Col className="mt-4">
          <h2>Say hello 👋</h2>
          <Form onSubmit={sendEmail}
          >
            <Row className="g-3">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                  <Form.Label>Name:</Form.Label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                 <Form.Label>Email:</Form.Label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                 <Form.Label>Subject:</Form.Label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    as="textarea"
                    name="message"
                    type='text'
                    value={formData.message}
                    onChange={handleChange}
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
