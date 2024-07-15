import React from 'react';
import { Link } from 'gatsby';
import blogMainItemIcon from '../../assets/images/blog-main-item-icon.svg';
import blogMainSecondItemIcon from '../../assets/images/blog-main-item-secondIcon.svg';

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
    };
};

type PostCardsProps = {
    posts: Post[];
};

const PostCards: React.FC<PostCardsProps> = ({ posts }) => {
    return (
        <div className="mainBlog-content">
            {posts.map((post) => (
                <div key={post.fields.md} className="mainBlog-item">
                    <img src={post.fields.previewImg.fields.file.url} alt={post.fields.title} className="blogMain-img1" />
                    <img src={blogMainItemIcon} alt="" className="blogMain-itemIcon" />
                    <img src={blogMainSecondItemIcon} alt="" className="blogMain-second-itemIcon" />
                    <div className="mainBlog-item-appearingIcon-wrapper">
                        <img
                            src={post.fields.avatar.fields.file.url}
                            alt={post.fields.authorName}
                            className="mainBlog-item-appearingIcon"
                        />
                        <span className="mainBlog-item-appearingText">{post.fields.authorName}</span>
                    </div>
                    <div style={{ padding: '32px' }}>
                        <Link to={`/blog/${post.fields.md}/`} className="mainBlog-item-lowerContent">
                            <h3 className="mainBlog-item-lowerTitle">{post.fields.title}</h3>
                            <p className="mainBlog-item-lowerText">{post.fields.previewText}</p>
                            <span className="mainBlog-item-lowerLink">Read more</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCards;
