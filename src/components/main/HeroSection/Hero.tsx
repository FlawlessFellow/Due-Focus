import './style.css';
import heroImg from './../../../assets/images/hero-right-block.png';
import BlueBtn from '../../BlueBtn/BlueBtn';
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__wrapper container">
                <div className="hero__left-block">
                    <h1 className="hero__left-title">Time Tracking & Productivity Chrome App You'll Actually Use</h1>
                    <p className="hero__left-text">Available on Google Web Store</p>
                    <div className="hero__left-btn">
                        <BlueBtn text={'Sign Up for Free'} classNames={'hero__blue-btn hvr-float-shadow '} onClick={() => null}/>
                    </div>
                </div>
                <div className="hero__right-block">
                    <img src={heroImg} alt="#" className="hero__img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
