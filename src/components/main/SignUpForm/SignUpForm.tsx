import React, { useRef, useState } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DevTool } from '@hookform/devtools';
import passwordIcon from '../../../assets/images/password-icon.svg';
import showPasswordIcon from '../../../assets/images/show-password.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import acceptImg from '../../../assets/images/accept.svg';
import rejectImg from '../../../assets/images/reject.svg';

type FormValues = {
    email: string;
    password: string;
};

const SignUpForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });
    const { register, control, handleSubmit, formState, getValues } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
    };

    const onError = (errors: FieldErrors<FormValues>) => {
        console.log('Form errors', errors);
    };

    const accept = <img src={acceptImg} alt="#!" />;
    const reject = <img src={rejectImg} alt="#!" />;

    const showPassword = () => {
        const pass = document.getElementById('psw') as HTMLInputElement;
        const eye = document.getElementById('pswIcon') as HTMLImageElement;

        if (pass.type === 'text') {
            pass.type = 'password';
            eye.src = passwordIcon;
        } else {
            pass.type = 'text';
            eye.src = showPasswordIcon;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="right-form" noValidate>
                <div className="input-wrapper">
                    <label htmlFor="email" className="email-desc">
                        Email
                    </label>
                    <input
                        type="text"
                        {...register('email', {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Please enter a valid email address',
                            },
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                        className={errors.email ? 'input-error' : 'input'}
                        placeholder="name@email.com"
                    />
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password" className="password-desc">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register('password', {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)[a-zA-Z\d]{8,64}$/,
                                message: 'Please select a strong password',
                            },
                            validate: {
                                minLength: (value) => value.length >= 8,
                            },
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                        })}
                        id="psw"
                        className={errors.password ? 'input-error' : 'input'}
                        placeholder="8+ Characters"
                    />
                    <UncontrolledPopover trigger="focus" placement="top" target="psw">
                        <PopoverBody className="popover">
                            <li>
                                {/.{8,64}/.test(getValues('password')) ? accept : reject} {'8-64 characters'}
                            </li>
                            <li>
                                {/[A-Z|А-Я|Ё]+/.test(getValues('password')) || /\d+/.test(getValues('password'))
                                    ? accept
                                    : reject}{' '}
                                {'numbers or UPPER case letter '}
                            </li>
                            <li>
                                {/[a-z|а-я|ё]+/.test(getValues('password')) ? accept : reject} {'lower case letter'}
                            </li>
                        </PopoverBody>
                    </UncontrolledPopover>
                    <p className="error-message">{errors.password?.message}</p>
                    <img src={passwordIcon} onClick={showPassword} id="pswIcon" className="password-image" alt="password-image" />
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
