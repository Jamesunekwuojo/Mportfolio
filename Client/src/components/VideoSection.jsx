import  { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const VideoSection = () => {
  // State to control the visibility of the video
  const [showVideo, setShowVideo] = useState(false);

  // Function to toggle video visibility
  const toggleVideo = () => {
    setShowVideo(!showVideo);  // Toggle between showing and hiding the video
  };

  return (
    <div>
           {/* Button to toggle video display */}
           <Button variant="primary" onClick={toggleVideo}>
            {showVideo ? 'Hide Video' : 'Show Video'}
          </Button>
          
          {/* Video element is conditionally rendered based on showVideo state */}
          {showVideo && (
            <div className="video-container mt-3">
              <video width="100%" height="auto" controls>
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
    </div>
 
  );
};

export default VideoSection;
