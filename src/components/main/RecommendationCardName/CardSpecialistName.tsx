import React, { FC } from "react";

const CardSpecialistName: FC<{ text: string; classNames?: string }> = ({ text, classNames }) => {
    return <strong className={`specialist__name ${classNames}`}>{text}</strong>;
};

export default CardSpecialistName;
