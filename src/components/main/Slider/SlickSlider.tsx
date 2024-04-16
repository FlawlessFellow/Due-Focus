import React from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardStars from './../../../assets/images/stars.svg';
import CardEmptyStar from './../../../assets/images/empty-star.svg';
import CardSpecialistName from '../CardSpecialistName/CardSpecialistName';

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
            <div className="recommendation__card">
                <div className="recommendation__cardWrapper">
                    <p className="recommendation__cardText">
                        “Thanks guys, you are doing a great job. Honestly right now you blow away any of the competitors by having
                        direct integration with 99% of the other toolsets I use. The fact I can hit one button and it blows up my
                        slack/gcaht feeds. I love your time tracking app. Keep it up!“
                    </p>
                    <div className="recommendation__itemsWrapper">
                        <div className="recommendation__starsWrapper">
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardEmptyStar} alt="recommendation star" />
                        </div>
                        <div className="recommendation__personalInfoItems">
                            <CardSpecialistName text="Noah H." classNames="recommendation__specialistName" />
                            <span className="recommendation__specialistPosition">Founder of Chromakey.io</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommendation__card">
                <div className="recommendation__cardWrapper">
                    <p className="recommendation__cardText">
                        “Your time tracker is incredible. Now I finally found the solution for both employees and clients. Our
                        team is doing things way faster and finally we don't have to worry about our earnings. Thank you.“
                    </p>
                    <div className="recommendation__itemsWrapper">
                        <div className="recommendation__starsWrapper">
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                        </div>
                        <div className="recommendation__personalInfoItems">
                            <CardSpecialistName text="Catherine S." classNames="recommendation__specialistName" />
                            <span className="recommendation__specialistPosition">Design Team Lead</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommendation__card">
                <div className="recommendation__cardWrapper">
                    <p className="recommendation__cardText">
                        “I'm really happy with this app because this is something I was looking for at cheap price and fortunately
                        I found it. The plus is I'm getting features like, activities, screenshots and invoices all in one app.
                        That's why I'm planning for going on long term basis and enjoying this time tracking software.“
                    </p>
                    <div className="recommendation__itemsWrapper">
                        <div className="recommendation__starsWrapper">
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                        </div>
                        <div className="recommendation__personalInfoItems">
                            <CardSpecialistName text="Imran Z." classNames="recommendation__specialistName" />
                            <span className="recommendation__specialistPosition">Senior Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommendation__card">
                <div className="recommendation__cardWrapper">
                    <p className="recommendation__cardText">
                        “You guys have done amazing work. DueFocus is really just incredible. Keep up the good work!“
                    </p>
                    <div className="recommendation__itemsWrapper">
                        <div className="recommendation__starsWrapper">
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardStars} alt="recommendation star" />
                            <img src={CardEmptyStar} alt="recommendation star" />
                        </div>
                        <div className="recommendation__personalInfoItems">
                            <CardSpecialistName text="Daniel R." classNames="recommendation__specialistName" />
                            <span className="recommendation__specialistPosition">TradeThePlan CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default SlickSlider;
