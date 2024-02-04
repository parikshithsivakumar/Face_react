// SimpleCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleCarousel.css';
import img2 from '../../static/imgs/new_hero.png';
import img3 from '../../static/imgs/php.png';

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-container">
        <h1>Events Highlights</h1>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 1" />
          <div className="slide-content">
            <h3>Subheading 1</h3>
            <p>This is some normal content for Slide 1.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 2" />
          <div className="slide-content">
            <h3>Subheading 2</h3>
            <p>This is some normal content for Slide 2.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Slide 3" />
          <div className="slide-content">
            <h3>Subheading 3</h3>
            <p>This is some normal content for Slide 3.</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;