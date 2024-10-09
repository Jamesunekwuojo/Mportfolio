import { Container, Row, Col, Image } from "react-bootstrap";
import "./MainAbout.css"

const MainAbout = () => {
  return (
    <div className="container-xxl py-6 mainAbout" id="about">
      <Container>
        <Row className="g-5">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-4">
                <h1 className="display-1 mb-0">M</h1>
                <h5 className="mb-0">eet</h5>
              </div>
              <h3 className="lh-base mb-0">ABIODUN MUSTAPHA</h3>
            </div>
            <p id="text1" className="mb-4">
              Abiodun Mustapha is a Personal Development Expert, Business
              Development Consultant, and Founder of Growth Hub Africa, a
              community of strategic career leaders and business experts.
            </p>
            <p id="text2" className="mb-4">
              He helps professionals and businesses through a process of
              purpose, productivity, and profitability. This he does through
              speaking engagements, training, personal coaching, and writing.
            </p>
            <p id="text3" className="mb-4">
              He is a Certified Business Trainer and Coach by the German
              Development Corporation (GIZ) - 2018 and has trained over 2,000
              and coached over 45 professionals and business owners.
            </p>
            <p id="text4" className="mb-4">
              He has been featured on various platforms such as the Young
              Professional Forum (Ketu, Oshodi, and Isheri-Idimu), The Prophetic
              Woman, Dear Potential, Sweet FM, Edufrica, Prevarsity Conference,
              amidst others.
            </p>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <Row className="g-3 mb-4 mt-4">
              <Col sm={6}>
                <Image
                  className="img-fluid rounded"
                  src="speak.jpg"
                  alt=""
                />
              </Col>
              <Col sm={6}>
                <Image
                  className="img-fluid rounded"
                  src="image3.jpg"
                  alt=""
                />
              </Col>
            </Row>
            <div id="textAbout" className="d-flex align-items-center mb-3">
              <p className="mb-4">
                He was selected to be one of the selected members of the Future
                of Computing Academy by the Association of Computing Machinery,
                New York out of over hundreds of very competitive applications,
                from academic institutions, research labs, and companies all
                over the world.
              </p>
            </div>
            <p id="text5" className="mb-4">
              He is the Convener of a city-to-city event, Purpose Hangout which
              has impacted over 500 young people from 6 cities in Nigeria. This
              has led to positioning them correctly for their life’s purposes.
            </p>
            <div className="d-flex align-items-center mb-3">
              <p id="text6" className="mb-4">
                Abiodun has been inspired to write thought-provoking articles
                and books which have caused remarkable transformation of
                mindset.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainAbout;
