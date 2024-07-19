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
    { id: 2, text: 'Duecode. Engineering metrics', href: 'https://duecode.io/', className: 'footer__link' },
    {
        id: 3,
        text: 'Duerank. Global developers leaderboard',
        href: 'https://duerank.com/leaderboard?country=G&lang=Go&max=10000&min=5000&page=1',
        className: 'footer__link',
    },
    { id: 4, text: 'Duelearn. Writing better code', href: 'https://duelearn.com/', className: 'footer__link' },
    { id: 5, text: 'Duetask. Set realistic estimates', href: '#', className: 'footer__link' },
];

const footerSecondBlockLinks = links.map((link) => (
    <p className="footer__list-text" key={link.id}>
        <a href={link.href} className={link.className} target="blank">
            <strong>{link.text}</strong>
        </a>
    </p>
));
// Collection for footer__second-block

// Collection for footer__third-block
const navItems = [
    { id: 1, text: 'Terms of Use', href: '#' },
    { id: 2, text: 'Privacy Policy', href: '#' },
    { id: 3, text: 'Cookie Policy', href: '#' },
];

const footerThirdLinks = navItems.map((link) => (
    <p className="footer__list-text" key={link.id}>
        <a href={link.href} className="footer__link">
            {link.text}
        </a>
    </p>
));
// Collection for footer__third-block

// Collection for footer__fourth-block
const footerTexts = [
    { id: 1, className: 'footer__list-subtitleLink', text: 'Contact us' },
    { id: 2, className: 'footer__list-text', text: '297 NV-207 Stateline, NV 89449 USA' },
    { id: 3, className: 'footer__list-text', text: '+1 310-388-9334' },
];

const footerImages = [
    { id: 1, src: FooterFacebookImg, alt: '' },
    { id: 2, src: FooterTwitterImg, alt: '' },
];

const lastBlockImages = [
    { id: 1, src: LastBlockFirstImg, href: 'https://cmmiinstitute.com/pars/appraisals/32381/historical', alt: 'footer logo' },
    { id: 2, src: LastBlockSecondImg, href: '#!', alt: 'footer logo' },
];

const Footer = () => {
    return (
        <section className="footer">
            <div className="container adaptive__container">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <div className="footer__first-block">
                            <Link to="/index" className="footer__link">
                                <img src={FooterLinkLogo} alt="logo" />
                            </Link>
                            <p className="first__block-text">Track work hours with a single button</p>
                            <div className="first__block-imagesWrapper">
                                <div className="first__block-images">
                                    <a href="https://www.facebook.com/DueFocusWeb" className="footer__link" target="blank">
                                        <img src={FooterFacebookImg} alt="facebook" />
                                    </a>
                                </div>
                                <div className="first__block-images">
                                    <a href="https://x.com/DueFocus" className="footer__link" target="blank">
                                        <img src={FooterTwitterImg} alt="twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer__second-block">
                            <p className="footer__list-subtitleLink">
                                <a href="https://diligences.com/" className="footer__link" target="blank">
                                    Diligences family
                                </a>
                            </p>
                            {footerSecondBlockLinks}
                        </div>
                        <div className="footer__third-block">
                            <p className="footer__list-subtitleLink">About</p>
                            {footerThirdLinks}
                        </div>
                        <div className="footer__fourth-block">
                            {footerTexts.map((item) => (
                                <p key={item.id} className={item.className}>
                                    {item.text}
                                </p>
                            ))}
                            <p className="footer__list-lastText">
                                <a href="#!" className="footer__link">
                                    support@diligences.com
                                </a>
                            </p>
                            <div className="fourth__block-imagesWrapper">
                                {footerImages.map((image) => (
                                    <div key={image.id} className="first__block-images">
                                        <a href="#!" className="footer__link">
                                            <img src={image.src} alt={image.alt} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="footer__lastBlock-images">
                                {lastBlockImages.map((image) => (
                                    <div key={image.id} className={`lastBlock__${image.id === 1 ? 'first' : 'second'}-img`}>
                                        <a href={image.href} target="blank" className="footer__link">
                                            <img src={image.src} alt={image.alt} />
                                        </a>
                                    </div>
                                ))}
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
