import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modalvideo1 from '../Modalvideo1/Modalvideo1';
import Modalvideo2 from "../Modalvideo2/Modalvideo2";
import Modal3video from "../Modal3video/Modal3video";
import "./Podcast.css"
function Podcast() {
  const [show, setShow] = useState(false); // Modal state
  const [videoSrc, setVideoSrc] = useState('');

  const handleShow = (videoKey) => {
    let src = '';
    switch (videoKey) {
      case 1:
        src = "https://www.youtube.com/embed/1vjZXQgrwo8?si=X_4NqEi4Yd_XQosz";
        break;
      case 2:
        src = "https://www.youtube.com/embed/4lbvpZaA2WM?si=HhX_Yxe2QHWuIXXx";
        break;
      case 3:
        src = "https://www.youtube.com/embed/KOmNT-VuAsk?si=i5EsntFEKgOEtZL2";
        break;
      default:
        break;
    }

    setVideoSrc(src); // To Set the appropriate video source
    setShow(true); // To  Show modal
  };

  const handleClose = () => {
    setShow(false); //  To Hide modal
    setVideoSrc(""); // To  Reset video source
  };

  return (
    <Container className='mt-4 h-100 podcastContainer'>
      <Row>
        {/* Video 1 */}
        <Col md={4} className="mb-4">
          <div className="video-item text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/1vjZXQgrwo8?si=X_4NqEi4Yd_XQosz"
         
              allowFullScreen
              title="Video 1"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button className="button_link"  variant="link" onClick={() => handleShow(1)}>
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button className="button_link"  variant="link" href="https://www.youtube.com/watch?v=1vjZXQgrwo8&t" target="_blank">
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
           
              allowFullScreen
              title="Video 2"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button className="button_link"  variant="link" onClick={() => handleShow(2)}>
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button className="button_link" variant="link" href="https://www.youtube.com/watch?v=4lbvpZaA2WM" target="_blank">
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
          
              allowFullScreen
              title="Video 3"
            ></iframe>
            <div className="d-flex justify-content-between mt-2">
              <Button className="button_link" variant="link" onClick={() => handleShow(3)}>
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button className="button_link" variant="link" href="https://www.youtube.com/watch?v=KOmNT-VuAsk" target="_blank">
                <i className="bi bi-play-btn"></i> Watch on YouTube
              </Button>
            </div>

            {/* video modals */}
            <Modalvideo1 show={show && videoSrc === "https://www.youtube.com/embed/1vjZXQgrwo8?si=X_4NqEi4Yd_XQosz"} onHide={handleClose} videoSrc={videoSrc}></Modalvideo1>
            <Modalvideo2 show={show && videoSrc === "https://www.youtube.com/embed/4lbvpZaA2WM?si=HhX_Yxe2QHWuIXXx"} onHide={handleClose} videoSrc={videoSrc}></Modalvideo2>
            <Modal3video show={show && videoSrc === "https://www.youtube.com/embed/KOmNT-VuAsk?si=i5EsntFEKgOEtZL2"} onHide={handleClose} videoSrc={videoSrc}></Modal3video>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Podcast;
