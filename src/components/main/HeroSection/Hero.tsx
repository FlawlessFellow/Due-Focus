import './style.css';
import heroImg from './../../../assets/images/hero-right-block.png';
import BlueBtn from '../../BlueBtn/BlueBtn';
import React, { useEffect, useState } from 'react';

const Hero = () => {
    // Set button text based on window width
    const [buttonText, setButtonText] = useState('Sign Up for Free');

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (window.innerWidth - scrollbarWidth < 1165) {
                setButtonText('Get Started');
            } else {
                setButtonText('Sign Up for Free');
            }
        };

        // Set initial state based on current window width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__left-block">
                        <h1 className="hero__left-title">Time Tracking & Productivity Chrome App You'll Actually Use</h1>
                        <p className="hero__left-text">Available on Google Web Store</p>
                        <div className="hero__left-btn">
                            <BlueBtn text={buttonText} classNames={'hero__blue-btn hvr-float-shadow '} onClick={() => null} />
                        </div>
                    </div>
                    <div className="hero__right-block">
                        <img src={heroImg} alt="#" className="hero__img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
