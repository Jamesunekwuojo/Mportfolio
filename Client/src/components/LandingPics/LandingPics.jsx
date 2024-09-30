import {Container, Row, Col} from "react-bootstrap";

const LandingPics = () => {

    return (
        <Container>
            <Row>
                <div className=" d-flex d-flex flex-row">


                    <Col lg={6} className="m-auto">
                      Abiodun Mustapha is a Personal Development Expert, Business Development Consultant and Founder of Growth Hub Africa, a community of strategic career leaders and business experts.

                      {/* He helps professionals and businesses through a process of purpose, productivity and profitability. This he does through speaking engagements, training, personal coaching and writing.

                      He is a Certified Business Trainer and Coach by the German Development Corporation (GIZ) - 2018 and has trained over 2,000 and coached over 45 professionals and business owners .

                      He has been featured on various platforms such as the Young Professional Forum (Ketu, Oshodi and Isheri-Idimu), The Prophetic Woman, Dear Potential, Sweet FM, Edufrica, Prevarsity Conference, amidst others */}
                    </Col>

                    <Col lg={6} className="">
                    <img src="image-home.png" alt="Landing Page"/>


             
                    


                    </Col>
           
                </div>             
            </Row>
        </Container>
    )

}

export default LandingPics;
