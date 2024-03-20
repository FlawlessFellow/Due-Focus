import React from 'react';
import './style.css';
import getStartedLogo from './../../../assets/images/get-started-logo.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';

const GetStarted = () => {
    return (
        <section className="get__started-section">
            <div className="started__wrapper container">
                <div className="started__items">
                    <div className="started__logo">
                        <img src={getStartedLogo} alt="started logo" className="started__img" />
                    </div>
                    <div className="started__content">
                        <div className="started__desc">
                            <p>Get started with DueFocus</p>
                        </div>
                        <div className="started__link">
                            <a href="#!">Download for Free on Google Web Store</a>
                        </div>
                    </div>
                </div>
                <div className="started__button">
                    <BlueBtn text={'Start Now'} classNames={'header__nav-blueBtn'} onClick={() => null}/>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
