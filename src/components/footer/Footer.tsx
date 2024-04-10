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
                            <Link to="#!" target={'_blank'}>
                                <img src={FooterLinkLogo} alt="footer link logo" />
                            </Link>
                            <p className="first__block-text">Track work hours with a single button</p>
                            <div className="first__block-imagesWrapper">
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'}>
                                        <img src={FooterFacebookImg} alt="" />
                                    </Link>
                                </div>
                                <div className="first__block-images">
                                    <Link to="#!" target={'_blank'}>
                                        <img src={FooterTwitterImg} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer__second-block">
                            <p className="footer__list-subtitleLink">
                                <a href="">Diligences family</a>
                            </p>
                            <p className="footer__list-text">
                                <strong>Duefocus</strong>. Time tracking
                            </p>
                            <p className="footer__list-text">
                                <strong>Duecode</strong>. Engineering metrics
                            </p>
                            <p className="footer__list-text">
                                <strong>Duerank</strong>. Global developers leaderboard
                            </p>
                            <p className="footer__list-text">
                                <strong>Duelearn</strong>. Writing better code
                            </p>
                            <p className="footer__list-lastText">
                                <strong>Duetask</strong>. Set realistic estimates
                            </p>
                        </div>
                        <div className="footer__third-block">
                            <p className="footer__list-subtitleLink">
                                <a href="">About</a>
                            </p>
                            <p className="footer__list-text">Terms of Use</p>
                            <p className="footer__list-text">Privacy Policy</p>
                            <p className="footer__list-lastText">Cookie Policy</p>
                        </div>
                        <div className="footer__fourth-block">
                            <p className="footer__list-subtitleLink">
                                <a href="">Contact us</a>
                            </p>
                            <p className="footer__list-text">297 NV-207 Stateline, NV 89449 USA</p>
                            <p className="footer__list-text">+1 310-388-9334</p>
                            <p className="footer__list-lastText">support@diligences.com</p>
                            <div className="footer__lastBlock-images">
                                <div className="lastBlock__first-img">
                                    <Link to="#!" target={'_blank'}>
                                        <img src={LastBlockFirstImg} alt="footer logo" />
                                    </Link>
                                </div>
                                <div className="lastBlock__second-img">
                                    <Link to="#!" target={'_blank'}>
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
