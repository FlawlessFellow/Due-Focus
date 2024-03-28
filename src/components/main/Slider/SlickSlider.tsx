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
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, false]}
                >
                    <CardSpecialistName text="- Imran Z." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Senior Developer" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“Thanks guys, you are doing a great job. Honestly right
                                now you blow away any of the competitors by having
                                direct integration with 99% of the other toolsets I use.
                                The fact I can hit one button and it blows up my
                                slack/gcaht feeds. I love your time tracking app. Keep it
                                up!“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, true]}
                >
                    <CardSpecialistName text="- Noah H." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Founder of Chromakey.io" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“This app has been a game-changer for me! It's like having a personal assistant in my pocket. Thanks to TimeSaver,
                I'm more organized and efficient than ever before. Now I have more time for important things in life, like
                spending time with family and hobbies.“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, false]}
                >
                    <CardSpecialistName text="- Imran Z." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="TradeThePlan CEO" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“TimeSaver is a lifesaver! As a busy professional, every second counts, and this app helps me make the most of my time.
                                From scheduling tasks to managing appointments, it's incredibly user-friendly and effective. 
                                With it, I feel more confident and organized in my work.“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, true]}
                >
                    <CardSpecialistName text="- Daniel R." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Senior Developer" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“I can't imagine my day without TimeSaver now. It's revolutionized the way I plan my schedule and stay on top of deadlines. 
                                Highly recommend it to anyone looking to streamline their life.“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, false]}
                >
                    <CardSpecialistName text="- Emily R." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Design Team Lead" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“I'm really happy with this app because this is
                                something I was looking for at cheap price and
                                fortunately I found it. The plus is I'm getting features
                                like, activities, screenshots and invoices all in one app.
                                That's why I'm planning for going on long term basis
                                and enjoying this time tracking software.“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, false]}
                >
                    <CardSpecialistName text="- Alex F." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Senior Developer" classNames="card__specialist-position" />
                </RecommendationCard>
                <RecommendationCard
                    cardText="“TimeSaver has exceeded my expectations. It's not just a time-management tool; it's a productivity powerhouse! 
                                I've become more productive and less stressed since I started using it.“"
                    cardWrapperClassName="new__card-wrapper"
                    cardTextClassName="new__card-text"
                    starsClassName="new__card-stars-wrapper"
                    starsImgClassName="new__card-stars"
                    stars={[true, true, true, true, true]}
                >
                    <CardSpecialistName text="- Matthew S." classNames="card__specialist-name" />
                    <CardSpecialistPosition text="Founder of Chromakey.io" classNames="card__specialist-position" />
                </RecommendationCard>
            </Slider>
        </div>
    );
}

export default SlickSlider;
