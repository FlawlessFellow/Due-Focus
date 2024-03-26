import React, { FC } from 'react';
import { Link } from 'gatsby';
import './style.css';

const SubtitleFooterList: FC<{ text: string; classNames: string }> = ({ text, classNames }) => {
    return (
        <p className={`${classNames}`}>
            <Link to="#!" target={'_blank'}>
                {text}
            </Link>
        </p>
    );
};

export default SubtitleFooterList;
