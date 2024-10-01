import  { useState, useEffect } from 'react';
import "./AutoTyping.css";
import VideoSection from '../VideoSection';
import Button from '../Button/Button.jsx'

const AutoTyping = () => {
  const textToType =  "Meet Abiodun Mustapha  a dedicated Personal Development";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToType.length) {
      const typingTimeout = setTimeout(() => {
        setText(prevText => prevText + textToType.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimeout); // Clean up timeout on unmount or text change
    } else {
      const resetTimeout = setTimeout(() => {
        setText(''); // Reset text
        setIndex(0); // Reset index
      }, 3000); // Wait for 2 seconds before resetting

      return () => clearTimeout(resetTimeout); // Clean up reset timeout
    }
  }, [index, textToType]);

  return (
    <div>
      <h1 className='typingText '>Empowering Professionals and Businesses to Achieve Purpose and Profitability.</h1>
      <div className='autoTypingContainer'>

        <p>{text}</p>

      </div>
     

       <div className='d-flex flex-row w-4'>

       <Button></Button>
       <VideoSection></VideoSection>

       </div>

      
    </div>
  );
};

export default AutoTyping;
