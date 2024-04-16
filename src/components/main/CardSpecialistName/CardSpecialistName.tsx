import React, { FC } from 'react';
import './style.css';

type Props = {
    text?: string;
    classNames?: string;
};

const CardSpecialistName: FC<Props> = ({ text, classNames }) => {
    return <strong className={classNames}>{text}</strong>;
};

export default CardSpecialistName;
