import React from 'react';
import './style.css';
import FooterLinkLogo from '../../assets/images/footer-link-img.png';
import FooterFacebookImg from '../../assets/images/footer-facebook-logo.png';
import FooterTwitterImg from '../../assets/images/footer-twitter-logo.png';
import SubtitleFooterList from '../FooterSubtitleList/SubtitleLinkList';
import TextFooterList from '../FooterTextList/TextFooterList';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__wrapper container">
                <ul className="footer__list">
                    <li className="footer__item-list">
                        <a href="#!" className="first__block-linkLogo">
                            <img src={FooterLinkLogo} alt="footer link logo" />
                        </a>
                        <p className="first__block-text">Track work hours with a single button</p>
                        <div className="first__block-imagesWrapper">
                            <div className="first__block-images">
                                <a href="#!">
                                    <img src={FooterFacebookImg} alt="" />
                                </a>
                            </div>
                            <div className="first__block-images">
                                <a href="#!">
                                    <img src={FooterTwitterImg} alt="" />
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="footer__item-list">
                        <SubtitleFooterList text={'Diligences family'} classNames={'footer__list-subtitleLink'} />
                        <TextFooterList
                            text={'Duefocus. Time tracking'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        
                    </li>
                    <li className="footer__item-list"></li>
                    <li className="footer__item-list"></li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
