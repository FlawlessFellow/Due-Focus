import React from 'react';
import './style.css';
import acceptImg from '../../../assets/images/accept.svg';
import rejectImg from '../../../assets/images/reject.svg';

type PopoverProps = {
    password: string;
};

const Popover: React.FC<PopoverProps> = ({ password }) => {
    const isValidLength = password.length >= 8;
    const hasUpperCaseOrNumber = /[A-Z]|\d/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    const checkMark = (isValid: boolean) => <img src={isValid ? acceptImg : rejectImg} alt={isValid ? 'valid' : 'invalid'} />;

    return (
        <div id="popover-click" className="absolute z-10 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <ul>
                <li className={`flex items-center ${isValidLength ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(isValidLength)}
                    <span className="ml-2">8-16 characters</span>
                </li>
                <li className={`flex items-center ${hasUpperCaseOrNumber ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(hasUpperCaseOrNumber)}
                    <span className="ml-2">numbers or UPPER case letter</span>
                </li>
                <li className={`flex items-center ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(hasLowerCase)}
                    <span className="ml-2">lower case letter</span>
                </li>
            </ul>
        </div>
    );
};

export default Popover;
