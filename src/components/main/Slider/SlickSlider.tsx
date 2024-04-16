import React from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardStars from './../../../assets/images/stars.svg';
import CardEmptyStar from './../../../assets/images/empty-star.svg';
import CardSpecialistName from '../CardSpecialistName/CardSpecialistName';
import RecommendationItems from './recommendationItems';

function SlickSlider() {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '10px',
                    centerMode: true,
                },
            },
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {RecommendationItems.map((recommendation) => (
                <div className="recommendation__card" key={recommendation.id}>
                    <div className="recommendation__cardWrapper">
                        <p className="recommendation__cardText">{recommendation.text}</p>
                        <div className="recommendation__itemsWrapper">
                            <div className="recommendation__starsWrapper">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={i < 4 ? CardStars : CardEmptyStar} alt="recommendation star" />
                                ))}
                            </div>
                            <div className="recommendation__personalInfoItems">
                                <CardSpecialistName
                                    text={recommendation.specialistName}
                                    classNames="recommendation__specialistName"
                                />
                                <span className="recommendation__specialistPosition">{recommendation.specialistPosition}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SlickSlider;
