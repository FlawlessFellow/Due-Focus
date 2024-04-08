import React, { FC } from 'react';
import './style.css';

interface TextFooterListProps {
    text: string;
    classNames: string;
    wrapFirstWordInStrong?: boolean;
}

const TextFooterList: FC<TextFooterListProps> = ({ text, classNames, wrapFirstWordInStrong = false }) => {
    let content: React.ReactNode;

    if (wrapFirstWordInStrong) {
        const words = text.split(' ');
        content = words.map((word, index) => {
            if (index === 0) {
                // If this is the first word, wrap it in a <strong> tag.
                return (
                    <React.Fragment key={index}>
                        <strong>{word}</strong>{' '}
                    </React.Fragment>
                );
            } else {
                return <React.Fragment key={index}>{word} </React.Fragment>;
            }
        });
    } else {
        content = text; // I assign the text if there's no need to wrap the first word.
    }

    return <p className={classNames}>{content}</p>;
};

export default TextFooterList;
