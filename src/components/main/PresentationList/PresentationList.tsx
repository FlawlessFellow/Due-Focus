import React, { FC } from "react";
import "./style.css";

type Props = {
  imageUrl: string;
  itemDesc: string;
  itemText: string;
};

const PresentationList: FC<Props> = ({ imageUrl, itemDesc, itemText }) => {
  return (
    <li className="presentation__item-list">
      <div className="presentation__item">
        <img
          src={imageUrl}
          alt="presentationImage"
          className="presentationImage"
        />
        <strong className="item__desc">{itemDesc}</strong>
        <p className="item__text">{itemText}</p>
      </div>
    </li>
  );
};

export default PresentationList;
