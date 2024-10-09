import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./EmailListing.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from 'sweetalert2';


const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID2;
const publicId = import.meta.env.VITE_PUBLIC_ID;

console.log(serviceId, templateId, publicId);

function EmailListing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId, // Replace with your EmailJS service ID
        templateId, // Replace with your EmailJS template ID
        e.target, // Form element itself
        publicId // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully to " + formData.recipientEmail);
          Swal.fire({
            title: 'Success!',
            text: 'Subscribed successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          console.log("message sent successfully", result);
        },
        (error) => {
          alert("An error occurred. Please try again.");
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred.Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.log(error);
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <Container
      className="p-4 mt-4 container"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "15px",
        height: "100vh",
      }}
    >
      <Row>
        <Col md={5}>
          <Image
            src="emailList.png" // Replace with the actual image path
            alt="Coach Profile"
            fluid
            // style={{ borderRadius: '15px' }}
          />
        </Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75" onSubmit={sendEmail}>
            <h4 className="emailText">
              {" "}
              Get updates & high-level information right in your mail box
            </h4>
            <Form.Group>
              <Form.Label>Name:</Form.Label>

              <Form.Control
                placeholder="Enter your name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label> Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Button type='submit' className="button d-flex justify-content-center mt-4">
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EmailListing;
