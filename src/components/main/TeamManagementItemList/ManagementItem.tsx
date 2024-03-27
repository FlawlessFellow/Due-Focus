import React, { FC, useRef, useEffect } from 'react';
import './style.css';

type Props = {
    itemDesc: string;
    classNames?: string;
    itemText: string;
    handleClick: () => void;
    textVisible: boolean;
};

const ManagementItemList: FC<Props> = ({ itemDesc, itemText, classNames, handleClick, textVisible }) => {
    const listRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (listRef.current) {
            if (textVisible) {
                listRef.current.classList.add('rotated');
                listRef.current.classList.add('management__item-list--active');
            } else {
                listRef.current.classList.remove('rotated');
                listRef.current.classList.remove('management__item-list--active');
            }
        }
    }, [textVisible]);

    return (
        <li className={`${classNames}`} ref={listRef} onClick={handleClick}>
            <div className="management__item-desc">{itemDesc}</div>
            <p className={`management__item-text ${textVisible ? 'visible' : 'hidden'}`}>{itemText}</p>
        </li>
    );
};

export default ManagementItemList;
