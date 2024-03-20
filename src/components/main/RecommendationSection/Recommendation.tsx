import React from 'react';
import './style.css';
import ProductTitle from '../ProductTitle/ProductTitle';
import RecommendationDescImg from '../../../assets/images/recommendation-section.png';

const Recommendation = () => {
    return (
        <section className="recommendation__section">
            <div className="recommendation__wrapper">
                <div className="recommendation__desc">
                    <ProductTitle text={'What Professionals Say'} classNames={'recommendation__title'} />
                    <a href="" className="recommendation__img-link">
                        <img src={RecommendationDescImg} alt="product hunt image link" />
                    </a>
                    <p className="recommendation__desc-text">Join the company of successful people</p>
                </div>
            </div>
        </section>
    );
};

export default Recommendation;
