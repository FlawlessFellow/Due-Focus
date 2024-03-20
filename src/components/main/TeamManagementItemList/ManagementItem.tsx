import React, { FC } from "react";
import "./style.css";
type Props = {
  itemDesc: string;
  classNames?: string;
  itemText: string;
  handleClick: () => void;
  textVisible: boolean;
};

const ManagementItemList: FC<Props> = ({
  itemDesc,
  itemText,
  classNames,
  handleClick,
  textVisible,
}) => {
  return (
    <li className={`${classNames}`}>
      <div className="management__item-desc" onClick={handleClick}>
        {itemDesc}
      </div>
      <p
        className={`management__item-text ${
          textVisible ? "visible" : "hidden"
        }`}
      >
        {itemText}
      </p>
    </li>
  );
};

export default ManagementItemList;
