import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import RecommendationCard from "./main/RecommendationCard/RecommendationCard";
import React from "react";

function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "250px",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: 
          {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
          }
      },
      {
        breakpoint: 924,
        settings: 
          {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          }
      },
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ background: "#000" }}>
          1
        </div>
        <div style={{ background: "#000" }}>
          2
        </div>
        <div style={{ background: "#000" }}>
          3
        </div>
      </Slider>
    </div>
  );
}

export default SlickSlider;
