import React from 'react';
import './style.css';
import heroImg from './../../../assets/images/app_screen.png';
import BlueBtn from '../../BlueBtn/BlueBtn';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__wrapper">
                <div className="hero__left-block">
                    <h1 className="hero__left-title">Time Tracking & Productivity Chrome App You'll Actually Use</h1>
                    <p className="hero__left-text">Available on Google Web Store</p>
                    <div className="hero__left-btn">
                        <BlueBtn text={'Sign Up For Free'} classNames={'hero__blue-btn hvr-float-shadow '} onClick={() => null} />
                    </div>
                </div>
                <div className="hero__right-block">
                    <img src={heroImg} alt="#" className="hero__img" />
                </div>
            </div>
            <BlueBtn text={'Get Started'} classNames={'hero__tablet-btn'} onClick={() => null} />
        </section>
    );
};

export default Hero;
