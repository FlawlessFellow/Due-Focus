import React from 'react';
import './style.css';
import SecuritySectionImg from './../../../assets/images/security-section.png';

const DataSecurity = () => {
    return (
        <section className="security__section">
            <div className="container">
                <div className="security__wrapper">
                    <div className="security__title-wrapper">
                        <h2 className="security__title">High Privacy and Security</h2>
                    </div>
                    <div className="security__content-items">
                        <div className="security__items-wrapper">
                            <div className="left__item-img">
                                <img src={SecuritySectionImg} alt="Data security logo" className="security__section-img" />
                            </div>
                            <div className="right__item-info">
                                <div>
                                    <p className="right__item-text">
                                        Conformity of the company to the requirements of GDPR guarantees the proper level of the
                                        services offered to clients.
                                    </p>
                                </div>
                                <div className="right__item-border"></div>
                                <div>
                                    <p className="right__item-text2">DATA PRIVACY WITH DROPBOX AND GOOGLE DRIVE</p>
                                </div>
                                <div>
                                    <p className="right__item-text3">Your data is always under protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataSecurity;
