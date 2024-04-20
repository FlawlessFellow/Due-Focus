import React from 'react';
import './style.css';
import FooterLinkLogo from '../../assets/images/footer-link-img.png';
import FooterFacebookImg from '../../assets/images/footer-facebook-logo.png';
import FooterTwitterImg from '../../assets/images/footer-twitter-logo.png';
import LastBlockFirstImg from '../../assets/images/footer-last-block-img1.png';
import LastBlockSecondImg from '../../assets/images/footer-last-block-img2.png';
import { Link } from 'gatsby';

// Collection for footer__second-block
const links = [
    { id: 1, text: 'Duefocus. Time tracking', href: '#', className: 'footer__link' },
    { id: 2, text: 'Duecode. Engineering metrics', href: '#', className: 'footer__link' },
    { id: 3, text: 'Duerank. Global developers leaderboard', href: '#', className: 'footer__link' },
    { id: 4, text: 'Duelearn. Writing better code', href: '#', className: 'footer__link' },
    { id: 5, text: 'Duetask. Set realistic estimates', href: '#', className: 'footer__link' },
];

const footerSecondBlockLinks = links.map((link) => (
    <p className="footer__list-text" key={link.id}>
        <Link to={link.href} target={'_blank'} className={link.className}>
            <strong>{link.text}</strong>
        </Link>
    </p>
));

// Collection for footer__third-block
const navItems = [
    { id: 1, text: 'Terms of Use', href: '#' },
    { id: 2, text: 'Privacy Policy', href: '#' },
    { id: 3, text: 'Cookie Policy', href: '#' },
];

const footerThirdLinks = navItems.map((link) => (
    <p className="footer__list-text" key={link.id}>
        <Link to={link.href} target={'_blank'} className="footer__link">
            {link.text}
        </Link>
    </p>
));

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
                            {footerSecondBlockLinks}
                        </div>
                        <div className="footer__third-block">
                            <p className="footer__list-subtitleLink">About</p>
                            {footerThirdLinks}
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
