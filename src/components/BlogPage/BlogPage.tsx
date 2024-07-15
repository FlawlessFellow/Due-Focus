import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../Header/Header';
import headerAvatar1 from '../../assets/images/hero-blog-avatar.png';
import { graphql, useStaticQuery } from 'gatsby';
import searchBlogIcon from '../../assets/images/search-blog.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import BlueBtn from '../BlueBtn/BlueBtn';
import BottomLinkPanel from '../main/BottomLinkPanelSection/BottomLinkPanel';
import Footer from '../Footer/Footer';
import PostCards from './postCards';
import _ from 'lodash';

const contentful = require('contentful');
const SPACE_ID = '1dv2x2c2xnsp';
const ACCESS_TOKEN = '6_kRNutfDKKOERdwo1MC7WfssDwATAHhotZFQ3MSqA4';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

type Post = {
    fields: {
        title: string;
        previewText: string;
        previewImg: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        avatar: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        authorName: string;
        md: string;
        category: string;
    };
};

const anchorItems = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Task Management' },
    { id: 3, name: 'Integrations' },
    { id: 4, name: 'Time Tracking' },
    { id: 5, name: 'Web' },
    { id: 6, name: 'Features' },
    { id: 7, name: 'Updates' },
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

const BlogPage: React.FC = () => {
    const [data, setData] = useState<{ [key: string]: Post }>({});
    const [initialItems, setInitialItems] = useState<{ [key: string]: Post }>({});
    const [isDataLoad, setDataLoad] = useState<boolean>(true);

    useEffect(() => {
        client
            .getEntries()
            .then((response: { items: Post[] }) => {
                const itemsObject = _.keyBy(response.items, 'sys.id');
                setData(itemsObject);
                setInitialItems(itemsObject);
                setDataLoad(false);
            })
            .catch((error: any) => {
                console.error('Error retrieving data from Contentful:', error);
            });
    }, []);

    const handleSearchPosts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedList = _.filter(initialItems, (post) =>
            post.fields.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setData(_.keyBy(updatedList, 'sys.id'));
    };

    const tabView = (category: string) => {
        if (category === 'All') {
            setData(initialItems);
        } else {
            const updatedList = _.filter(initialItems, (post) => {
                return post.fields.category.toLowerCase().includes(category.toLowerCase());
            });
            setData(_.keyBy(updatedList, 'sys.id'));
        }
    };

    return (
        <>
            <Header
                headerNavClass={headerNav}
                headerNavDownloadClass={headerNavDownload}
                headerNavActionsClass={headerNavActions}
            />
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
                        <a href="#!" className="leftContent-linkText">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
            <div className="searchBlog-wrapper">
                <div className="searchBlog-item">
                    <input
                        type="text"
                        placeholder="Search in DueFocus Blog…"
                        className="searchBlog-input"
                        onChange={handleSearchPosts}
                    />
                    <img src={searchBlogIcon} alt="search icon" className="searchBlog-icon" />
                </div>
                <div className="searchBlog-links">
                    <div className="searchBlog-socialMedia-links">
                        <a href="#!" className="searchBlog-socialMedia-link">
                            <img src={linkedinIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </a>
                        <a href="#!" className="searchBlog-socialMedia-link">
                            <img src={twitterIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </a>
                        <a href="#!" className="searchBlog-socialMedia-link">
                            <img src={facebookIcon} alt="#!" className="searchBlog-socialMedia-icon" />
                        </a>
                    </div>
                    <button className="searchBlog-button">Subscribe</button>
                </div>
            </div>
            <div className="anchorsBlog-wrapper">
                {anchorItems.map((item) => (
                    <div key={item.id} className="anchorBlog-item" onClick={() => tabView(item.name)}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="mainBlog-wrapper">
                <div className="mainBlog-content">
                    <PostCards posts={Object.values(data)} />
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
