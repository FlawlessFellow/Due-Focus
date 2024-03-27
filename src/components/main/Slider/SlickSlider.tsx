import React from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import CardSpecialistName from '../RecommendationCardName/CardSpecialistName';
import CardSpecialistPosition from '../RecommendationCardJobTitle/CardSpecialistPosition';

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
        <div className="slider-container">
            <Slider {...settings}>
                    <RecommendationCard
                        cardText="“I'm really happy with this app because this is
                          something I was looking for at cheap price and
                          fortunately I found it. The plus is I'm getting features
                          like, activities, screenshots and invoices all in one app.
                          That's why I'm planning for going on long term basis
                          and enjoying this time tracking software.“"
                        cardWrapperClassName="new__card-wrapper"
                        cardTextClassName='new__card-text'
                        starsClassName='new__card-stars-wrapper'
                        starsImgClassName='new__card-stars'
                    >
                      <CardSpecialistName text='Imran Z.' classNames='card__specialist-name'/>
                      <CardSpecialistPosition text='Senior Developer' classNames='card__specialist-position' />
                    </RecommendationCard>
                    <RecommendationCard
                        cardText="“I'm really happy with this app because this is
                          something I was looking for at cheap price and
                          fortunately I found it. The plus is I'm getting features
                          like, activities, screenshots and invoices all in one app.
                          That's why I'm planning for going on long term basis
                          and enjoying this time tracking software.“"
                        cardWrapperClassName="new__card-wrapper"
                        cardTextClassName='new__card-text'
                        starsClassName='new__card-stars-wrapper'
                        starsImgClassName='new__card-stars'
                    >
                      <CardSpecialistName text='Imran Z.' classNames='card__specialist-name'/>
                      <CardSpecialistPosition text='Senior Developer' classNames='card__specialist-position' />
                    </RecommendationCard>
                    <RecommendationCard
                        cardText="“I'm really happy with this app because this is
                          something I was looking for at cheap price and
                          fortunately I found it. The plus is I'm getting features
                          like, activities, screenshots and invoices all in one app.
                          That's why I'm planning for going on long term basis
                          and enjoying this time tracking software.“"
                        cardWrapperClassName="new__card-wrapper"
                        cardTextClassName='new__card-text'
                        starsClassName='new__card-stars-wrapper'
                        starsImgClassName='new__card-stars'
                    >
                      <CardSpecialistName text='Imran Z.' classNames='card__specialist-name'/>
                      <CardSpecialistPosition text='Senior Developer' classNames='card__specialist-position' />
                    </RecommendationCard>
                    <RecommendationCard
                        cardText="“I'm really happy with this app because this is
                          something I was looking for at cheap price and
                          fortunately I found it. The plus is I'm getting features
                          like, activities, screenshots and invoices all in one app.
                          That's why I'm planning for going on long term basis
                          and enjoying this time tracking software.“"
                        cardWrapperClassName="new__card-wrapper"
                        cardTextClassName='new__card-text'
                        starsClassName='new__card-stars-wrapper'
                        starsImgClassName='new__card-stars'
                    >
                      <CardSpecialistName text='Imran Z.' classNames='card__specialist-name'/>
                      <CardSpecialistPosition text='Senior Developer' classNames='card__specialist-position' />
                    </RecommendationCard>
            </Slider>
        </div>
    );
}

export default SlickSlider;
