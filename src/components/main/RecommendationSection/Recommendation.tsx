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
            <Link to="#!" className="recommendation__img-link">
                <img src={RecommendationDescImg} alt="product hunt image link" />
            </Link>
            <p className="recommendation__desc-text">Join the company of successful people</p>
            <RecommendationSlider />
        </section>
    );
};

export default Recommendation;
