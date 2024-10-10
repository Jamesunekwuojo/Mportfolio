
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <Container className="py-5">
        <h1 className="subheader text-center mb-5">Testimonial</h1>
        <Row className="justify-content-center">
          {/* <Col lg={3} className="d-none d-lg-block">
            <div className="testimonial-left h-100">
              <Image className="img-fluid" src="drfemi.jpg" alt="" />
              <Image className="img-fluid" src="babatunde.jpg" alt="" />
              <Image className="img-fluid" src="hamzat.jpg" alt="" />
            </div>
          </Col> */}

          <Col lg={8}>
            <Carousel prevIcon={<FaChevronLeft        className="custom-carousel-icon" />} 
                nextIcon={<FaChevronRight className="custom-carousel-icon" />}>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image

                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="drfemi.jpg"
                      alt=""
                      style={{width:'150px'}}
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p id="text1" className="fs-5 fst-italic">
                    Abiodun desires to see young people who are below the age of
                    30 understand their life purpose and bring to fruition their
                    dreams of better tomorrow.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Dr. Femi Awoyomi</h5>
                  <span>
                    Executive Chairman, Africa Young Brains, Lagos, Nigeria
                  </span>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="babatunde.jpg"
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p id="text2" className="fs-5 fst-italic">
                    Dr Mustapha is meticulous, energetic and trustworthy. He is
                    ever willing to learn. His level of maturity in
                    interpersonal relationships is rated above average.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Dr Babatunde</h5>
                  <span>Academic Researcher & Lecturer | Biochemist</span>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="hamzat.jpg"
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p id="text3"  className="fs-5 fst-italic">
                    Abiodun is easily one of the most disciplined and focused
                    people I have had the privilege to work with. He just gets
                    the work done!
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Oluwaseun Hamzat</h5>
                  <span>
                    Technology/Startup Ecosystem Developer and Technology &
                    Strategy Consultant
                  </span>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* <Col lg={3} className="d-none d-lg-block">
            <div className="testimonial-right h-100">
              <Image className="img-fluid" src="img/dr femi.jpg" alt="" />
              <Image className="img-fluid" src="img/babatunde.jpg" alt="" />
              <Image className="img-fluid" src="img/hamzat.jpg" alt="" />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
