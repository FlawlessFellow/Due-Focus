import React from 'react';
import './style.css';
import getStartedLogo from './../../../assets/images/get-started-logo.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';

const GetStarted = () => {
    const goToWebStore = () => {
        window.open(
            'https://chromewebstore.google.com/detail/duefocus-time-tracking-ap/jmjoillacjphggegfecfofhagpcfnhda',
            '_blank'
        );
    };

    return (
        <section className="get__started-section">
            <div className="get__started-container">
                <div className="started__wrapper">
                    <div className="started__items">
                        <div className="started__logo">
                            <img src={getStartedLogo} alt="started logo" className="started__img" />
                        </div>
                        <div className="started__content">
                            <div>
                                <p className="started__desc">Get started with DueFocus</p>
                            </div>
                            <div>
                                <p className="started__link">Download for Free on Google Web Store</p>
                            </div>
                        </div>
                    </div>
                    <div className="started__button">
                        <BlueBtn text={'Start Now'} classNames={'getStarted__blue-btn'} onClick={goToWebStore} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
