import React, { FC } from 'react';

type Props = {
    text: React.ReactNode;
    classNames?: string;
};

const CardSpecialistPosition: FC<Props> = ({ text, classNames }) => {
    return <span className={classNames}>{text}</span>;
};

export default CardSpecialistPosition;
