import React, { useState, useEffect } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import taskTrackersImg from '../../../assets/images/tasktrackers.svg';
import handImg from '../../../assets/images/hand.svg';
import successGreenIcon from '../../../assets/images/success-green-icon.svg';
import closeIcon from '../../../assets/images/close-icon.png';
import passwordIcon from '../../../assets/images/password-icon.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import trackerTrelloImg from '../../../assets/images/time-tracker-trello.svg';
import appGitHubImg from '../../../assets/images/app-github.svg';
import toolGitHubImg from '../../../assets/images/tool-github.svg';

const SignUpSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmptyEmailValue, setIsEmptyEmailValue] = useState(false);
    const [passwordValue, setPasswordValue] = useState(false);

    const [isEmptyEmailError, setEmailError] = useState('This field cannot be empty');
    const [passwordError, setPasswordError] = useState('This field cannot be empty');

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        if (!emailRegex.test(String(e.target.value))) {
            setEmailError("It doesn't looks like an e-mail");
            if (!e.target.value) {
                setEmailError('This field cannot be empty');
            }
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Please select a strong password');
            if (!e.target.value) {
                setPasswordError('This field cannot be empty');
            }
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setIsEmptyEmailValue(true);
                break;
            case 'password':
                setPasswordValue(true);
                break;
        }
    };

    return (
        <section id="sign__up-section">
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
                <div className="right__closeModule-wrapper">
                    <img src={closeIcon} alt="close-icon" />
                </div>
                <div className="right__module-content">
                    <h4 className="right__module-subtitle">Create DueFocus Account</h4>
                    <span className="right__module-text">Already have an Account? Sign In</span>
                    <div className="right__form-wrapper">
                        <form action="" className="right-form">
                            <div className="email__input-wrapper">
                                <span className="email-desc">Email</span>
                                <input
                                    onChange={(e) => emailHandler(e)}
                                    value={email}
                                    onBlur={(e) => blurHandler(e)}
                                    type="text"
                                    name="email"
                                    className="email-input"
                                    placeholder="name@email.com"
                                />
                                {isEmptyEmailValue && isEmptyEmailError && (
                                    <div className="email-error-message">{isEmptyEmailError}</div>
                                )}
                            </div>
                            <div className="password__input-wrapper">
                                <span className="password-desc">Password</span>
                                <input
                                    onChange={(e) => passwordHandler(e)}
                                    value={password}
                                    type="password"
                                    name="password"
                                    onBlur={(e) => blurHandler(e)}
                                    className="password-input"
                                    placeholder="8+ Characters"
                                />
                                <img src={passwordIcon} className="password-image" alt="password-image" />
                                {passwordError && passwordValue && <div className="email-error-message">{passwordError}</div>}
                            </div>
                            <div className="agreement-wrapper">
                                <input type="checkbox" id="checkbox" className="check-box" name="checkbox" />
                                <label htmlFor="checkbox" className="agreement-label">
                                    <div className="agreement__label-wrapper">
                                        I agree to the
                                        <a href="#!" className="agreement-link">
                                            {' '}
                                            Terms Of Use
                                        </a>{' '}
                                        and{' '}
                                        <a href="#!" className="agreement-link">
                                            {' '}
                                            Privacy Policy
                                        </a>
                                        , and{' '}
                                        <a href="#!" className="agreement-link">
                                            Cookie Use
                                        </a>
                                        .
                                    </div>
                                </label>
                            </div>
                            <BlueBtn text="Create Free Account" classNames="agreement-btn" onClick={() => {}} />
                        </form>
                        <div className="right__module-bottomDesc">
                            <div className="bottom-border"></div>
                            <span className="bottom-desc">Or Sign Up With</span>
                        </div>
                        <div className="trackers-2sd"></div>
                        <div className="trackers-wrapper">
                            <div className="trackers-items">
                                <div className="item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={trackerTrelloImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="time-tracker-trello"
                                        />
                                    </a>
                                </div>
                                <div className="item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={appGitHubImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="app-github-image"
                                        />
                                    </a>
                                </div>
                                <div className="last__item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={toolGitHubImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="tool-github-image"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpSection;

// const redBorder = () => {
//     if (isEmptyEmailError) {

//     }
// }
