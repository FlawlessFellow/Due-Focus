import React, { FC } from "react";

const CardSpecialistPosition: FC<{ text: string; classNames?: string }> = ({
  text,
  classNames,
}) => {
  return <span className={`specialist__position ${classNames}`}>{text}</span>;
};

export default CardSpecialistPosition;
