import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import passwordIcon from '../../../assets/images/password-icon.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';

type FormValues = {
    email: string;
    password: string;
};

const SignUpForm = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="right-form" noValidate>
                <div className="input-wrapper">
                    <label htmlFor="email" className="email-desc">
                        Email
                    </label>
                    {/* INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT */}
                    <input
                        type="text"
                        {...register('email', {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Please enter a valid email address',
                            },
                            validate: {
                                errorBorder: (fieldValue) => {
                                    const regEx = /^[a-zA-Z0-9.!#$%&’*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                                    if (!regEx.test(fieldValue)) {
                                        return '';
                                    }
                                },
                            },
                        })}
                        className={errors.email ? 'error-input' : 'email-input'}
                        placeholder="name@email.com"
                    />
                    <p className="error-message">{errors.email?.message}</p>
                    {/* INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT */}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password" className="password-desc">
                        Password
                    </label>
                    {/* INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT */}
                    <input
                        type="password"
                        {...register('password', {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)[a-zA-Z\d]{8,64}$/,
                                message: 'Please select a strong password',
                            },
                            validate: {
                                errorBorder: (fieldValue) => {
                                    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)[a-zA-Z\d]{8,64}$/;
                                    if (!validPassword.test(fieldValue)) {
                                        return '';
                                    }
                                },
                            },
                        })}
                        className={errors.password ? 'error-input' : 'email-input'}
                        placeholder="8+ Characters"
                    />
                    <p className="error-message">{errors.password?.message}</p>
                    {/* INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT INPUT */}
                    <img src={passwordIcon} className="password-image" alt="password-image" />
                </div>
                <div className="agreement-wrapper">
                    <input type="checkbox" id="checkbox" className="check-box" name="checkbox" />
                    <label htmlFor="checkbox" className="agreement-label">
                        <div className="agreement__label-wrapper">
                            I agree to the
                            <a href="#!" className="agreement-link">
                                {' '}
                                Terms Of Use
                            </a>{' '}
                            and{' '}
                            <a href="#!" className="agreement-link">
                                {' '}
                                Privacy Policy
                            </a>
                            , and{' '}
                            <a href="#!" className="agreement-link">
                                Cookie Use
                            </a>
                            .
                        </div>
                    </label>
                </div>
                <BlueBtn text="Create Free Account" classNames="agreement-btn" onClick={() => {}} />
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default SignUpForm;
