import React from 'react';
import { Link } from 'gatsby';
import './style.css';
import getStartedLogo from './../../../assets/images/get-started-logo.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';

const GetStarted = () => {
    return (
        <section className="get__started-section">
            <div className="container">
                <div className="started__wrapper">
                    <div className="started__items">
                        <div className="started__logo">
                            <img src={getStartedLogo} alt="started logo" className="started__img" />
                        </div>
                        <div className="started__content">
                            <div className="started__desc">
                                <p>Get started with DueFocus</p>
                            </div>
                            <div className="started__link">
                                <Link to="#!" target={'_blank'}>
                                    Download for Free on Google Web Store
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="started__button">
                        <BlueBtn text={'Start Now'} classNames={'header__nav-blueBtn'} onClick={() => null} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
