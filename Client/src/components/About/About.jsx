import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
     <Container>
      <Row className="w-80, h-90 border rounded ">
        <Col lg={6}></Col>
        <Col lg={6}>
          <p>dsdd</p>
          <p>Abiodun Mustapha is a Personal Development Expert, Business Development Consultant and Founder of Growth Hub Africa, a community of strategic career leaders and business experts.</p>

          <p> He helps professionals and businesses through a process of purpose, productivity and profitability. This he does through speaking engagements, training, personal coaching and writing.</p>

          <p>He is a Certified Business Trainer and Coach by the German Development Corporation (GIZ) - 2018 and has trained over 2,000 and coached over 45 professionals and business owners .</p>

          <p>He has been featured on various platforms such as the Young Professional Forum (Ketu, Oshodi and Isheri-Idimu), The Prophetic Woman, Dear Potential, Sweet FM, Edufrica, Prevarsity Conference, amidst others</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
