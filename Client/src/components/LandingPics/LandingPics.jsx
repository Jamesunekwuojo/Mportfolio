import { Container, Row, Col } from "react-bootstrap";
import "./LandingPics.css";
import AutoTyping from "../AutoTyping/AutoTyping";

const LandingPics = () => {


  return (
    <Container>
      <Row>
        <div className=" d-flex d-flex flex-row  mt-4">
          <Col lg={6} className="m-auto">
            <AutoTyping></AutoTyping>           
       
        
          </Col>

          <Col lg={6} className="">
            <img style={{width:'410px'}}src="image-home .png" alt="Landing Page" />
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default LandingPics;
