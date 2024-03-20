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
                <div className="footer__content">
                    <div className="footer__first-block">
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
                    </div>
                    <div className="footer__second-block">
                        <SubtitleFooterList text={'Diligences family'} classNames={'footer__list-subtitleLink'} />
                        <TextFooterList
                            text={'Duefocus. Time tracking'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        <TextFooterList
                            text={'Duecode. Engineering metrics'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        <TextFooterList
                            text={'Duecode. Engineering metrics'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        <TextFooterList
                            text={'Duerank. Global developers leaderboard'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        <TextFooterList
                            text={'Duelearn. Writing better code'}
                            classNames={'footer__list-text'}
                            wrapFirstWordInStrong={true}
                        />
                        <TextFooterList
                            text={'Duetask. Set realistic estimates'}
                            classNames={'footer__list-lastText'}
                            wrapFirstWordInStrong={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
