import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          <div className="slide">
          <p>
                Enhance fortune 50 company’s insights teams research capabilities
              </p>
          </div>
          <div className="slide">
          <p>
                Enhance fortune 50 company’s insights teams research capabilities
              </p>
        </div>
          <div className="slide">
          <p>
                Enhance fortune 50 company’s insights teams research capabilities
              </p>
          </div>
        </div>
        <div className="dots">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`dot ${activeSlide === index ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
