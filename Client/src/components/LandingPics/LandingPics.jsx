import { Container, Row, Col } from "react-bootstrap";
import "./LandingPics.css";
import AutoTyping from "../AutoTyping/AutoTyping";

const LandingPics = ({className}) => {


  return (
    <Container className={`h-100 ${className}`}>
      <Row>
        <div className="landingContainer mt-4   ">
          <Col lg={6} className="m-auto">
            <AutoTyping></AutoTyping>           
       
        
          </Col>

          <Col lg={6} className="imageDiv">
            <img className='mainhomeImage' src="/image-home.png" alt="Landing Page" />
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default LandingPics;
