import React from 'react';
import { Link } from 'gatsby';
import './style.css';
import ProductTitle from '../ProductTitle/ProductTitle';
import RecommendationDescImg from '../../../assets/images/recommendation-section.png';
import RecommendationSlider from '../Slider/SlickSlider';

const Recommendation = () => {
    return (
        <section className="recommendation__section">
            <ProductTitle text={'What Professionals Say'} classNames={'recommendation__title'} />
            <div className="links-wrapper">
                <a
                    href="https://www.producthunt.com/products/duefocus?utm_source=badge-top-post-badge&utm_medium=badge#duefocus"
                    className="recommendation__img-link"
                    target="_blank"
                >
                    <img src={RecommendationDescImg} alt="product hunt image link" className="recommendation-linkImg" />
                </a>
                <Link to="/blog" className="link-to-blogPage">
                    <button className="searchBlog-button responsive">Blog Page</button>
                </Link>
            </div>
            <p className="recommendation__desc-text">Join the company of successful people</p>
            <RecommendationSlider />
        </section>
    );
};

export default Recommendation;
