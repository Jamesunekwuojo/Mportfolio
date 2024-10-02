import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";

const Highlight = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://example.com/image1.jpg" // Replace with the correct image path
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://example.com/image2.jpg" // Replace with the correct image path
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://example.com/image3.jpg" // Replace with the correct image path
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Highlight;
