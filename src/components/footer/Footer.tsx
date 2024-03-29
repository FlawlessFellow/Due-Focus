import React from 'react';
import './style.css';
import FooterLinkLogo from '../../assets/images/footer-link-img.png';
import FooterFacebookImg from '../../assets/images/footer-facebook-logo.png';
import FooterTwitterImg from '../../assets/images/footer-twitter-logo.png';
import SubtitleFooterList from '../FooterSubtitleList/SubtitleLinkContent';
import TextFooterList from '../FooterTextList/TextFooterContent';
import LastBlockFirstImg from '../../assets/images/footer-last-block-img1.png';
import LastBlockSecondImg from '../../assets/images/footer-last-block-img2.png';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
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
                        <div className="footer__third-block">
                            <SubtitleFooterList text={'ABOUT'} classNames={'footer__list-subtitleLink'} />
                            <TextFooterList text={'Terms of Use'} classNames={'footer__list-text'} />
                            <TextFooterList text={'Privacy Policy'} classNames={'footer__list-text'} />
                            <TextFooterList text={'Cookie Policy'} classNames={'footer__list-lastText'} />
                        </div>
                        <div className="footer__fourth-block">
                            <SubtitleFooterList text={'CONTACT US'} classNames={'footer__list-subtitleLink'} />
                            <TextFooterList text={'297 NV-207 Stateline, NV 89449 USA'} classNames={'footer__list-text'} />
                            <TextFooterList text={'+1 310-388-9334'} classNames={'footer__list-text'} />
                            <TextFooterList text={'support@diligences.com'} classNames={'footer__list-lastText'} />
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
                    <div className="footer__bottom-border"></div>
                    <p className="footer-copyright">© 2022 Duefocus.com., all rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
