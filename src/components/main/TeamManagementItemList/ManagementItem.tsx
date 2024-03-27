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
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            if (textVisible) {
                containerRef.current.classList.add('rotated');
            } else {
                containerRef.current.classList.remove('rotated');
            }
        }
    }, [textVisible]);

    return (
        <li className={`${classNames}`}>
            <div className="management__item-desc" ref={containerRef} onClick={handleClick}>
                {itemDesc}
            </div>
            <p className={`management__item-text ${textVisible ? 'visible' : 'hidden'}`}>{itemText}</p>
        </li>
    );
};

export default ManagementItemList;
