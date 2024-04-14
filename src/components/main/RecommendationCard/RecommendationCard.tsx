import React, { ReactNode, FC } from 'react';
import './style.css';
import CardStars from './../../../assets/images/stars.svg';
import CardEmptyStar from './../../../assets/images/empty-star.svg';

type Props = {
    cardText?: string;
    cardWrapperClassName?: string;
    cardTextClassName?: string;
    starsClassName?: string;
    starsImgClassName?: string;
    stars: (boolean | null)[];
    children: ReactNode;
};

const RecommendationCard: FC<Props> = ({
    cardText,
    cardWrapperClassName,
    cardTextClassName,
    starsClassName,
    starsImgClassName,
    stars,
    children,
}) => {
    return (
        <div className={cardWrapperClassName}>
            <div>
                <p className={cardTextClassName}>{cardText}</p>
                <div className={starsClassName}>
                    {stars &&
                        stars.map((star, index) => (
                            <img
                                key={index}
                                src={star ? CardStars : CardEmptyStar}
                                alt="star img"
                                className={starsImgClassName}
                            />
                        ))}
                </div>
                {children}
            </div>
        </div>
    );
};

export default RecommendationCard;
