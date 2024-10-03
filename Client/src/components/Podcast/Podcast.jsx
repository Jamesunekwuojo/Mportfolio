import {useState} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modalvideo1 from '../Modalvideo1/Modalvideo1';
import Modalvideo2 from "../Modalvideo2/Modalvideo2";
import Modal3video from "../Modal3video/Modal3video"
function Podcast() {

    const [show, setShow] = useState(false); // Modal state
    const [videoSrc, setVideoSrc] = useState({
      vid1Src : '',
      vid2Src : '',
      vid3Src :'',
    });
  
    const handleShow = () => {
      setVideoSrc({
        // vidSrc1 :  "https://www.youtube.com/embed/1vjZXQgrwo8?si=X_4NqEi4Yd_XQosz",
        

        vid1Src: "https://www.youtube.com/embed/4lbvpZaA2WM?si=HhX_Yxe2QHWuIXXx",

        vid2Src: "https://www.youtube.com/embed/4lbvpZaA2WM?si=HhX_Yxe2QHWuIXXx",
        vid3Src: "https://www.youtube.com/embed/KOmNT-VuAsk?si=i5EsntFEKgOEtZL2"
      }

      

       
      ); // Set video source
      setShow(true); // Show modal
    };
  
    const handleClose = () => {
      setShow(false); // Hide modal
      setVideoSrc(""); // Reset video source
    };

  return (
    <Container className='mt-4'>
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
              <Button variant="link" data-bs-toggle="modal"
              onClick={handleShow} data-bs-target="#videoModal1">
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
              <Button variant="link" data-bs-toggle="modal"
               onClick={handleShow}  data-bs-target="#videoModal2">
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
              <Button variant="link" data-bs-toggle="modal" data-bs-target="#videoModal3" onClick={handleShow}>
                <i className="bi bi-eye"></i> Watch Video
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=KOmNT-VuAsk" target="_blank">
                <i className="bi bi-play-btn"></i> Watch on YouTube
              </Button>
            </div>

            {/* video modals */}
            <Modalvideo1 show={show} onHide={handleClose} videoSrc={videoSrc.vid1Src}></Modalvideo1>

            <Modalvideo2 show={show} onHide={handleClose} videoSrc={videoSrc.vid2Src}></Modalvideo2>

            <Modal3video show={show} onHide={handleClose} videoSrc={videoSrc.vid3Src}></Modal3video>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Podcast;
