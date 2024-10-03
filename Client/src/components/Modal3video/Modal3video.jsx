import {Modal} from "react-bootstrap"

const Modal3video = ({show, onHide, videoSrc}) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size="md" centered>
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

export default Modal3video
