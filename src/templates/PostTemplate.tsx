import React from 'react';
import './style.css';
import { graphql } from 'gatsby';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Header from '../components/Header/Header';
import ProgressBar from '../components/common/ProgressBar';
import linkedInIcon from '../assets/images/linkedin-icon.svg';
import twitterIcon from '../assets/images/twitter-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';

type PostTemplateProps = {
    data: {
        contentfulPost: {
            title: string;
            previewText: string;
            previewImg: {
                file: {
                    url: string;
                };
            };
            avatar: {
                file: {
                    url: string;
                };
            };
            authorName: string;
            authorPosition: string;
            description: {
                raw: any;
            };
            date: string;
            category: string;
            md: string;
        };
    };
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
    const { title, previewImg, avatar, authorName, authorPosition, description, date, category, md } = data.contentfulPost;

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const target = node.data.target;
                if (target && target.fields) {
                    const { title, file } = target.fields;
                    const imageUrl = file?.url || '';
                    const imageAlt = title || 'Embedded Image';
                    return `<img src='${imageUrl}' alt='${imageAlt}' />`;
                }
                return ''; // Возврат пустой строки, если нет данных
            },
        },
    };

    const text = documentToHtmlString(JSON.parse(description.raw), options);

    return (
        <>
            <Header />
            <ProgressBar />
            <div className="main">
                <div className="social-panel">
                    <a href="#!" className="socialPanel-link">
                        <img src={linkedInIcon} alt="linked in" className="socialPanel-icons" />
                    </a>
                    <a href="#!" className="socialPanel-link">
                        <img src={twitterIcon} alt="twitter" className="socialPanel-icons" />
                    </a>
                    <div className="socialPanel-last-link">
                        <a href="#!">
                            <img src={facebookIcon} alt="facebook" className="socialPanel-icons" />
                        </a>
                    </div>
                </div>
                <div className="topContent-img" style={{ backgroundImage: `url(${previewImg.file.url})` }}>
                    <div className="topContent">
                        <div className="topContent-category">{category}</div>
                        <h1 className="topContent-title">{title}</h1>
                    </div>
                </div>
                <div className="block">
                    <div className="left-side">
                        <img src={avatar.file.url} alt="avatar" className="leftSide-img" />
                        <div className="leftSide-content">
                            <span className="leftSide-text">Published at {date}</span>
                            <h5 className="author-name">{authorName}</h5>
                            <p className="author-position">{authorPosition}</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="rightSide-linksWrapper">
                            <a href="#!" className="rightSide-link">
                                <img src={linkedInIcon} alt="linked in" className='rightSide-icons' /> //Тут остановился//
                            </a>
                            <a href="#!" className="rightSide-link">
                                <img src={twitterIcon} alt="twitter" className='rightSide-icons' />
                            </a>
                            <div className="rightSide-lastLink">
                                <a href="facebook">
                                    <img src={facebookIcon} alt="facebook" className='rightSide-icons' />
                                </a>
                            </div>
                        </div>
                        <button className="rightSide-button">Subscribe</button>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content-title">{title}</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
            </div>
        </>
    );
};

export default PostTemplate;

export const query = graphql`
    query ($slug: String!) {
        contentfulPost(md: { eq: $slug }) {
            title
            previewText
            previewImg {
                file {
                    url
                }
            }
            avatar {
                file {
                    url
                }
            }
            authorName
            authorPosition
            description {
                raw
            }
            date(formatString: "MMMM Do, YYYY")
            category
            md
        }
    }
`;
