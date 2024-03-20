import React, { FC } from "react";
import "./style.css";

const ProductTitle: FC<{ text: string; classNames: string }> = ({
  text,
  classNames,
}) => {
  return <h2 className={`${classNames}`}>{text}</h2>;
};

export default ProductTitle;
