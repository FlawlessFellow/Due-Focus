import React, { ReactNode, FC } from "react";
import "./style.css";
import CardStars from "./../../../assets/images/stars.svg";
import CardEmptyStar from "./../../../assets/images/empty-star.svg";

type Props = {
  CardText?: string;
  classNames?: string;
  specialistNameClass?: string;
  specialistPositionClass?: string;
  children: ReactNode;
};

const RecommendationCard: FC<Props> = ({
  CardText,
  classNames,
  specialistNameClass,
  specialistPositionClass,
  children,
}) => {
  return (
    <div className={`card__wrapper ${classNames}`}>
      <p className={`card__text ${classNames}`}>{CardText}</p>
      <div className={`stars ${classNames}`}>
        <img src={CardStars} alt="star img" />
        <img src={CardStars} alt="star img" />
        <img src={CardStars} alt="star img" />
        <img src={CardStars} alt="star img" />
        <img src={CardEmptyStar} alt="star img" />
      </div>
      {children}
    </div>
  );
};

export default RecommendationCard;
