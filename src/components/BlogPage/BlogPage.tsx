import React from 'react';
import './style.css';
import Header from '../Header/Header';
import headerAvatar1 from '../../assets/images/hero-blog-avatar.png';
import headerAvatar2 from '../../assets/images/hero-blog-avatar2.png';
import { Link } from 'gatsby';
import searchBlogIcon from '../../assets/images/search-blog.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import blogMainImg1 from '../../assets/images/blog-main-png1.png';
import blogMainImg2 from '../../assets/images/blog-main-png2.png';
import blogMainImg3 from '../../assets/images/blog-main-png3.png';
import blogMainItemIcon from '../../assets/images/blog-main-item-icon.svg';
import blogMainSecondItemIcon from '../../assets/images/blog-main-item-secondIcon.svg';
import BlueBtn from '../BlueBtn/BlueBtn';
import BottomLinkPanel from '../main/BottomLinkPanelSection/BottomLinkPanel';
import Footer from '../Footer/Footer';

const anchorItems = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Task Management' },
    { id: 3, name: 'Integrations' },
    { id: 4, name: 'Time Tracking' },
    { id: 5, name: 'Web' },
    { id: 6, name: 'Features' },
    { id: 7, name: 'Updates' },
];

const blogItems = [
    {
        id: 1,
        imgSrc: blogMainImg1,
        itemIcon: blogMainItemIcon,
        secondItemIcon: blogMainSecondItemIcon,
        avatar: headerAvatar1,
        author: 'aNanas',
        socialLinks: [
            { id: 1, to: '#!', icon: linkedinIcon },
            { id: 2, to: '#!', icon: twitterIcon },
            { id: 3, to: '#!', icon: facebookIcon },
        ],
        title: 'Keep Moving: Serpstat Changes Pricing Plans And Starts',
        text: 'Keep Moving: Serpstat Changes Pricing Plans And Starts The Last Chance SaleKeep Moving: Serpstat Changes Pricing Plans And Starts The Last Chance Sale',
        readMoreLink: '#!',
    },
    {
        id: 2,
        imgSrc: blogMainImg2,
        itemIcon: blogMainItemIcon,
        secondItemIcon: blogMainSecondItemIcon,
        avatar: headerAvatar2,
        author: 'Maj',
        socialLinks: [
            { id: 1, to: '#!', icon: linkedinIcon },
            { id: 2, to: '#!', icon: twitterIcon },
            { id: 3, to: '#!', icon: facebookIcon },
        ],
        title: 'Why I joined Asana: Rishika Dhody, Data Scientist',
        text: 'Why I joined Asana: Rishika Dhody, Data ScientistWhy I joined Asana: Rishika Dhody, Data ScientistWhy I joined Asana: Rishika Dhody, Data Scientist',
        readMoreLink: '#!',
    },
    {
        id: 3,
        imgSrc: blogMainImg3,
        itemIcon: blogMainItemIcon,
        secondItemIcon: blogMainSecondItemIcon,
        avatar: headerAvatar2,
        author: 'Anna Gun',
        socialLinks: [
            { id: 1, to: '#!', icon: linkedinIcon },
            { id: 2, to: '#!', icon: twitterIcon },
            { id: 3, to: '#!', icon: facebookIcon },
        ],
        title: 'Loud and proud: celebrating Pride 2019 (and beyond)',
        text: 'Loud and proud: celebrating Pride 2019 (and beyond)Loud and proud: celebrating Pride 2019 (and beyond)Loud and proud: celebrating Pride 2019 (and beyond)',
        readMoreLink: '#!',
    },
];

// HEADER-BLOG CSS STYLES
const headerNav = {
    justifyContent: 'space-between',
};
const headerNavDownload = {
    marginRight: '43%',
};
const headerNavActions = {
    width: '25%',
    marginLeft: '0',
    marginRight: '10px',
};

const BlogPage = () => {
    return (
        <>
            <Header headerNav={headerNav} headerNavDownload={headerNavDownload} headerNavActions={headerNavActions} />
            <div className="hero-wrapper">
                <div className="hero-leftContent">
                    <div className="leftContent-first-block"></div>
                    <div className="hero-contentWrapper">
                        <div className="hero-personalInfo">
                            <img
                                src={headerAvatar1}
                                alt="personal avatar"
                                style={{ width: '56px', height: '56px', marginRight: '16px' }}
                            />
                            <div>
                                <h2 className="hero-personalName">aNanas</h2>
                                <span className="hero-dateComment">20 Feb 2020</span>
                            </div>
                        </div>
                        <h1 className="leftContent-subtitle">Keep Moving: Serpstat Changes Pricing Plans And Starts</h1>
                        <p className="leftContent-text">
                            Keep Moving: Serpstat Changes Pricing Plans And Starts The Last Chance SaleKeep Moving: Serpstat
                            Changes Pricing Plans And Starts The Last Chance Sale
                        </p>
                        <Link to="#!" target={'_blank'} className="leftContent-linkText">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="searchBlog-wrapper">
                <div className="searchBlog-item">
                    <input type="text" placeholder="Search in DueFocus Blog…" className="searchBlog-input" />
                    <img src={searchBlogIcon} alt="search icon" className="searchBlog-icon" />
                </div>
                <div className="searchBlog-links">
                    <div className="searchBlog-socialMedia-links">
                        <Link to="#!" target={'_blank'} className="searchBlog-socialMedia-link">
                            <img src={linkedinIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </Link>
                        <Link to="#!" target={'_blank'} className="searchBlog-socialMedia-link">
                            <img src={twitterIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </Link>
                        <Link to="#!" target={'_blank'} className="searchBlog-socialMedia-link">
                            <img src={facebookIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </Link>
                    </div>
                    <button className="searchBlog-button">Subscribe</button>
                </div>
            </div>
            <div className="anchorsBlog-wrapper">
                {anchorItems.map((item) => (
                    <div key={item.id} className="anchorBlog-item">
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="mainBlog-wrapper">
                <div className="mainBlog-content">
                    {blogItems.map((item) => (
                        <div key={item.id} className="mainBlog-item">
                            <div>
                                <img src={item.imgSrc} alt="#!" className="blogMain-img1" />
                                <img src={item.itemIcon} alt="#!" className="blogMain-itemIcon" />
                                <img src={item.secondItemIcon} alt="#!" className="blogMain-second-itemIcon" />
                            </div>
                            <div className="mainBlog-item-appearingIcon-wrapper">
                                <img src={item.avatar} alt="#!" className="mainBlog-item-appearingIcon" />
                                <span className="mainBlog-item-appearingText">{item.author}</span>
                            </div>
                            <div className="mainBlog-item-appearingIcons">
                                {item.socialLinks.map((link) => (
                                    <Link key={link.id} to={link.to} target="_blank" className="mainBlog-item-appearingLinks">
                                        <img src={link.icon} alt="#!" className="searchBlog-socialMedia-icon" />
                                    </Link>
                                ))}
                            </div>
                            <div style={{ padding: '32px' }}>
                                <Link to={item.readMoreLink} target="_blank" className="mainBlog-item-lowerContent">
                                    <h3 className="mainBlog-item-lowerTitle">{item.title}</h3>
                                    <p className="mainBlog-item-lowerText">{item.text}</p>
                                    <span className="mainBlog-item-lowerLink">Read more</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottomBlog-wrapper">
                <div className="bottomBlog-left-item">
                    <h3 className="bottomBlog-subtitle">Get News from Duefocus!</h3>
                    <p className="bottomBlog-text">Get Upates and excluseve access to contetn.</p>
                </div>
                <div className="bottomBlog-right-item">
                    <input type="text" placeholder="A place for your email" className="bottomBlog-input" />
                    <BlueBtn text="Subscribe" classNames="bottomBlog-button" />
                </div>
            </div>
            <BottomLinkPanel />
            <Footer />
        </>
    );
};

export default BlogPage;
