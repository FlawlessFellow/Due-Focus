import React from 'react';
import './style.css';
import acceptImg from '../../../assets/images/accept.svg';
import rejectImg from '../../../assets/images/reject.svg';

type PopoverProps = {
    password: string;
};

const Popover: React.FC<PopoverProps> = ({ password }) => {
    const isValidLength = password.length >= 8 && password.length <= 16;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasUpperCaseAndNumber = hasUpperCase && hasNumber;
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    const checkMark = (isValid: boolean) => <img src={isValid ? acceptImg : rejectImg} alt={isValid ? 'valid' : 'invalid'} />;

    return (
        <div id="popover-click" className="absolute z-10 w-64 p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
            <ul>
                <li className={`flex items-center ${isValidLength ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(isValidLength)}
                    <span className="ml-2">8-16 characters</span>
                </li>
                <li className={`flex items-center ${hasUpperCaseAndNumber ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(hasUpperCaseAndNumber)}
                    <span className="ml-2">UPPER case letter and numbers</span>
                </li>
                <li className={`flex items-center ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(hasLowerCase)}
                    <span className="ml-2">lower case letter</span>
                </li>
                <li className={`flex items-center ${hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}>
                    {checkMark(hasSpecialChar)}
                    <span className="ml-2">special character</span>
                </li>
            </ul>
        </div>
    );
};

export default Popover;
