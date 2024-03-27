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
    children: ReactNode;
};

const RecommendationCard: FC<Props> = ({
    cardText,
    cardWrapperClassName,
    cardTextClassName,
    starsClassName,
    starsImgClassName,
    children,
}) => {
    return (
        <div className={cardWrapperClassName}>
            <p className={cardTextClassName}>{cardText}</p>
                <div className={starsClassName}>
                    <img src={CardStars} alt="star img" className={starsImgClassName} />
                    <img src={CardStars} alt="star img" className={starsImgClassName} />
                    <img src={CardStars} alt="star img" className={starsImgClassName} />
                    <img src={CardStars} alt="star img" className={starsImgClassName} />
                    <img src={CardEmptyStar} alt="star img" className={starsImgClassName} />
                </div>
            {children}
        </div>
    );
};

export default RecommendationCard;
