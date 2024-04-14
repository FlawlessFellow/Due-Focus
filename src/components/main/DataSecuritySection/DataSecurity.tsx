import React from 'react';
import './style.css';
import SecuritySectionImg from './../../../assets/images/privacy.svg';

const DataSecurity = () => {
    return (
        <section className="security__section">
            <div className="security__wrapper">
                <h2 className="security__title">High Privacy and Security</h2>
                <div className="security__items-wrapper">
                    <img src={SecuritySectionImg} alt="Data security logo" className="security__section-img" />
                    <div className="right__item-info">
                        <p className="right__item-text">
                            Conformity of the company to the requirements of GDPR guarantees the proper level of the services
                            offered to clients.
                        </p>
                        <div className="right__item-border"></div>
                        <p className="right__item-text2">DATA PRIVACY WITH DROPBOX AND GOOGLE DRIVE</p>
                        <p className="right__item-text3">Your data is always under protection</p>
                    </div>
                    <div className="security__arrow-block"></div>
                </div>
            </div>
        </section>
    );
};

export default DataSecurity;
