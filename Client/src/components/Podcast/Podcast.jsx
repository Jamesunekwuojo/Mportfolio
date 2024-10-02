
import { Container, Row, Col, Button } from 'react-bootstrap';


function Podcast() {
  return (
    <Container>
      <Row>
        {/* Video 1 */}
        <Col md={4} className="mb-4">
          <div className="video-item text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/1vjZXQgrwo8?si=X_4NqEi4Yd_XQosz"
              frameBorder="0"
              allowFullScreen
              title="Video 1"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button variant="link" data-bs-toggle="modal" data-bs-target="#videoModal1">
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=1vjZXQgrwo8&t" target="_blank">
                <i className="bi bi-play-btn"></i> Watch on YouTube
              </Button>
            </div>
          </div>
        </Col>

        {/* Video 2 */}
        <Col md={4} className="mb-4">
          <div className="video-item text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/4lbvpZaA2WM?si=HhX_Yxe2QHWuIXXx"
              frameBorder="0"
              allowFullScreen
              title="Video 2"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button variant="link" data-bs-toggle="modal" data-bs-target="#videoModal2">
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=4lbvpZaA2WM" target="_blank">
                <i className="bi bi-play-btn"></i> Watch on YouTube
              </Button>
            </div>
          </div>
        </Col>

        {/* Video 3 */}
        <Col md={4} className="mb-4">
          <div className="video-item text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/KOmNT-VuAsk?si=i5EsntFEKgOEtZL2"
              frameBorder="0"
              allowFullScreen
              title="Video 3"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button variant="link" data-bs-toggle="modal" data-bs-target="#videoModal3">
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=KOmNT-VuAsk" target="_blank">
                <i className="bi bi-play-btn"></i> Watch on YouTube
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Podcast;
