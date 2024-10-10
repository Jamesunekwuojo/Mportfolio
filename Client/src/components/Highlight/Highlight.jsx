import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import "./Highlight.css"

const Highlight = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className=" w-80 mt-4  highlightContainer h-100 " >
      <Row ><h1 className='highlightHeader text-center '>Highlight</h1></Row>
      <Row>
        <Col lg={8} className="">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100 highlightCarousel "
                src="speak.jpg" // Replace with the correct image path
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 highlightCarousel "
                src="/abiodun3.jpg" // Replace with the correct image path
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 highlightCarousel "
                src="abiodun.jpeg" // Replace with the correct image path
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={4}>
          <div className="d-flex flex-column highlightDiv">
            <img className='highlight' src="highlight.jpg" alt="" />
            <img className='highlight' src="highlight1.jpg" alt="" />
            <img className='highlight' src="speak.jpg" alt="" />

          </div>
        
        

        </Col>
      </Row>
    </Container>
  );
};

export default Highlight;
