import React, { useState, useEffect } from 'react';
import './style.css';
import taskTrackersImg from '../../../assets/images/tasktrackers.svg';
import handImg from '../../../assets/images/hand.svg';
import successGreenIcon from '../../../assets/images/success-green-icon.svg';
import closeIcon from '../../../assets/images/close-icon.png';
import passwordIcon from '../../../assets/images/password-icon.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';

const SignUpSection = () => {
    return (
        <div id="sign-up">
            <section className="sign__up-section">
                <div className="sign__up-wrapper">
                    <div className="left__module-wrapper">
                        <div className="left__module-topImages">
                            <img src={taskTrackersImg} className="task__tracker-img" alt="task-tracker-img" />
                            <img src={handImg} className="hand-img" alt="hand-img" />
                        </div>
                        <div className="left__module-bottomContent">
                            <div>
                                <img src={successGreenIcon} alt="" className="first__leftBottom-image" />
                                <span className="left__bottom-text">Get All Features for Free</span>
                            </div>
                            <div>
                                <img src={successGreenIcon} alt="" className="second__leftBottom-image" />
                                <span className="left__bottom-text">Set up in 1 minute</span>
                            </div>
                        </div>
                    </div>

                    <div className="right__module-wrapper">
                        <div className="right__module-headerIcon">
                            <img src={closeIcon} alt="" />
                        </div>
                        <div className="right__module-content">
                            <h4>Create DueFocus Account</h4>
                            <span>Already have an Account? Sign In</span>
                            <div className="right__form-wrapper">
                                <form action="" className="right-form">
                                    <div className="email__input-wrapper">
                                        <span className="email-desc"></span>
                                        <input
                                            type="email"
                                            className="email-input"
                                            value={'email'}
                                            placeholder="name@email.com"
                                        />
                                    </div>
                                    <div className="password__input-wrapper">
                                        <span className="password-desc"></span>
                                        <input
                                            type="password"
                                            className="password-input"
                                            value={'password'}
                                            placeholder="8+ Characters"
                                        />
                                        <img src={passwordIcon} className="password-image" alt="password-image" />
                                        <div className="password__errorMessage-wrapper">
                                            <span className="password__error-message">Please select a strong password</span>
                                        </div>
                                        <div className="agreement-wrapper">
                                            <input type="checkbox" className="agreement__checkbox-input" name="checkbox" />
                                            <label htmlFor="checkbox"></label>
                                            <div className="agreement__text">
                                                I agree to the <a href="#!">Terms Of Use</a> and <a href="#!">Privacy Policy</a>,
                                                and <a href="#!">Cookie Use</a> .
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUpSection;
