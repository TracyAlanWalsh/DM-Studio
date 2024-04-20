import React, { useState, useEffect } from 'react';
import image1 from '././assets/BenStudio1.jpg'; // Import the images
import image2 from './assets/mixer2.jpg';
import image3 from './assets/Mix3.jpg';
import image4 from './assets/Mix4.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [opacity, setOpacity] = useState(1);

  // Array of image URLs
  const images = [
    image1,
    image2,
    image3,
    image4,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Function to automatically change the slide every 5 seconds
    const interval = setInterval(() => {
      setOpacity(0); // Fade out the current image
      setNextIndex((currentIndex + 1) % images.length); // Calculate the index of the next image
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, images.length]); // Dependency array includes currentIndex and images.length

  useEffect(() => {
    // Set opacity back to 1 after the fade out is complete
    const timeout = setTimeout(() => {
      setCurrentIndex(nextIndex); // Update the current index
      setOpacity(1); // Fade in the next image
    }, 300); // Adjust the duration of the fade transition

    return () => clearTimeout(timeout);
  }, [nextIndex]);

  return (
    <div className="image-slider">
      <img
        className="source-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ opacity: opacity }} // Set the opacity dynamically
      />
    </div>
  );
};

export default ImageSlider;