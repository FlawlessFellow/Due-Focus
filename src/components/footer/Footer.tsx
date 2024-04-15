import React from 'react';
import './style.css';
import FooterLinkLogo from '../../assets/images/footer-link-img.png';
import FooterFacebookImg from '../../assets/images/footer-facebook-logo.png';
import FooterTwitterImg from '../../assets/images/footer-twitter-logo.png';
import LastBlockFirstImg from '../../assets/images/footer-last-block-img1.png';
import LastBlockSecondImg from '../../assets/images/footer-last-block-img2.png';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container adaptive__container">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <div className="footer__first-block">
                            <Link to="#!" target={'_blank'} className="footer__link">
                                <img src={FooterLinkLogo} alt="footer link logo" />
                            </Link>
                            <p className="first__block-text">Track work hours with a single button</p>
                            <div className="first__block-imagesWrapper">
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={FooterFacebookImg} alt="" />
                                    </Link>
                                </div>
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={FooterTwitterImg} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer__second-block">
                            <p className="footer__list-subtitleLink">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    Diligences family
                                </Link>
                            </p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    <strong>Duefocus</strong>. Time tracking
                                </Link>
                            </p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    <strong>Duecode</strong>. Engineering metrics
                                </Link>
                            </p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    <strong>Duerank</strong>. Global developers leaderboard
                                </Link>
                            </p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    <strong>Duelearn</strong>. Writing better code
                                </Link>
                            </p>
                            <p className="footer__list-lastText">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    <strong>Duetask</strong>. Set realistic estimates
                                </Link>
                            </p>
                        </div>
                        <div className="footer__third-block">
                            <p className="footer__list-subtitleLink">About</p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    Terms of Use
                                </Link>
                            </p>
                            <p className="footer__list-text">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    Privacy Policy
                                </Link>
                            </p>
                            <p className="footer__list-lastText">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    Cookie Policy
                                </Link>
                            </p>
                        </div>
                        <div className="footer__fourth-block">
                            <p className="footer__list-subtitleLink">Contact us</p>
                            <p className="footer__list-text">297 NV-207 Stateline, NV 89449 USA</p>
                            <p className="footer__list-text">+1 310-388-9334</p>
                            <p className="footer__list-lastText">
                                <Link to="#!" target={'_blank'} className="footer__link">
                                    support@diligences.com
                                </Link>
                            </p>
                            <div className="fourth__block-imagesWrapper">
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={FooterFacebookImg} alt="" />
                                    </Link>
                                </div>
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={FooterTwitterImg} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="footer__lastBlock-images">
                                <div className="lastBlock__first-img">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={LastBlockFirstImg} alt="footer logo" />
                                    </Link>
                                </div>
                                <div className="lastBlock__second-img">
                                    <Link to="#!" target={'_blank'} className="footer__link">
                                        <img src={LastBlockSecondImg} alt="footer logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border__container">
                        <div className="footer__bottom-border"></div>
                    </div>
                    <p className="footer-copyright">© 2022 Duefocus.com., all rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
