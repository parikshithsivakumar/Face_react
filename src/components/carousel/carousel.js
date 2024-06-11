import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleCarousel.css';
import img1 from '../../static/imgs/events_1.jpg';
import img2 from '../../static/imgs/events_2.jpg';

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Auto play speed
    arrows: false, // Hide navigation arrows for a cleaner look
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-heading">Highlights</h1>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={img1} alt="Slide 1" />
          <div className="slide-content">
            <h2>React Workshop</h2>
            <p>Experience the world of React with this opportunity</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 2" />
          <div className="slide-content">
            <h2>Hands-on React Workshop</h2>
            <p>Experience the world of React with this opportunity</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
