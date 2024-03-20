import React, { FC } from 'react';
import './style.css';

const TextFooterList: FC<{ text: string; classNames: string }> = ({ text, classNames }) => {
    return <p className={`${classNames}`}>{text}</p>;
};

export default TextFooterList;
