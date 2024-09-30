import  { useState, useEffect } from 'react';

const AutoTyping = () => {
  const textToType = "Empowering Professionals and Businesses to Achieve Purpose and Profitability.";
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
      }, 2000); // Wait for 2 seconds before resetting

      return () => clearTimeout(resetTimeout); // Clean up reset timeout
    }
  }, [index, textToType]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default AutoTyping;
