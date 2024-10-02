import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import "./Highlight.css"

const Highlight = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className=" w-80 mt-4  container " style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', height:'80vh'   }}>
      <Row>
        <Col lg={8}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="" // Replace with the correct image path
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
        <Col lg={4}>
          <div className="d-flex flex-column">
            <img className='highlight' src="highlight.jpg" alt="" />
            <img src="highlight1.jpg" alt="" />
            <img className='highlight' src="speak.jpg" alt="" />

          </div>
        
        

        </Col>
      </Row>
    </Container>
  );
};

export default Highlight;
