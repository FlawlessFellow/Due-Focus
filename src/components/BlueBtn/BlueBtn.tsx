import React, { FC } from "react";
import "./style.css";

type Props = {
  text: string;
  onClick: () => void;
  classNames?: string;
  disabled?: boolean;
};

const BlueBtn: FC<Props> = ({ text, onClick, classNames, disabled }) => {
  return (
    <button
      type="submit"
      className={`${classNames}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BlueBtn;
