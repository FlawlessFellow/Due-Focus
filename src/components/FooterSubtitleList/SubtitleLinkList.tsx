import React, { FC } from 'react';
import './style.css';

const SubtitleFooterList: FC<{ text: string; classNames: string }> = ({ text, classNames }) => {
    return (
        <p className={`${classNames}`}>
            <a href="#!">{text}</a>
        </p>
    );
};

export default SubtitleFooterList;
