import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./VideoSection.css"

const VideoSection = () => {
  const [show, setShow] = useState(false); // Modal state
  const [videoSrc, setVideoSrc] = useState("");

  const handleShow = () => {
    setVideoSrc(
      "https://www.youtube.com/embed/o4D4dE2Qwn0?si=CXZYdn6d4y2tNm2D"
    ); // Set video source
    setShow(true); // Show modal
  };

  const handleClose = () => {
    setShow(false); // Hide modal
    setVideoSrc(""); // Reset video source
  };

  return (
    <div>
      {/* Button to trigger modal */}
      {/* <Button className=" button mx-4" onClick={handleShow}> */}
        {/* <span> */}
        <svg className="videoSvg" onClick = {handleShow} fill="#ff9900" width="80px" height="80px" viewBox="0 -8 528 528" xmlns="http://www.w3.org/2000/svg" ><title>video</title><path d="M264 456Q211 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 309 437 356 410 402 364 429 318 456 264 456ZM345 256L216 160 216 352 345 256Z" /></svg>
        {/* </span> */}
      {/* </Button> */}
      <h5 className="ms-4 mb-0 d-none d-sm-block">Watch Video</h5>

      {/* Modal for playing video */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Watch more Video on{" "}
            <a
              href="https://www.youtube.com/@AbiodunMustapha/featured"
              target="_blank"
            >
              {" "}
              Youtube Channel
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {/* Embed the video */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              title="Video Player"
              width="100%"
              height="400"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default VideoSection;
