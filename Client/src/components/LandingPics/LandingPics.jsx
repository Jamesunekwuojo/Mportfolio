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
            Abiodun Mustapha is a Personal Development Expert, Business
            Development Consultant and Founder of Growth Hub Africa, a community
            of strategic career leaders and business experts.
        
          </Col>

          <Col lg={6} className="">
            <img src="image-home .png" alt="Landing Page" />
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default LandingPics;
