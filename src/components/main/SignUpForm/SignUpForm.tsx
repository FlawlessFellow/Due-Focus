import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import passwordIcon from '../../../assets/images/password-icon.svg';
import showPasswordIcon from '../../../assets/images/show-password.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import { FormControlLabel, Checkbox } from '@mui/material';
import { LoginStore, useLoginStore } from '../../../zustand-state/ZustandState';
import Popover from '../Popover/Popover';

const API_URL = 'https://eo1ahyv4yhhcnmc.m.pipedream.net';

type FormValues = {
    email: string;
    password: string;
    checkboxValid: boolean;
};

const SignUpForm = () => {
    const setData = useLoginStore((store) => store.setValue);
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const [password, setPassword] = useState('');

    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            checkboxValid: false,
        },
        mode: 'onChange',
    });
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        setError,
        clearErrors,
    } = form;

    const onSubmit = async (data: FormValues) => {
        if (!acceptTnC) {
            setError('checkboxValid', {
                type: 'manual',
                message: 'You must agree to the terms',
            });
            return;
        }

        try {
            const response = await fetch(API_URL, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseBody = (await response.json()) as Omit<LoginStore, 'setValue'>;
            setData(responseBody.name, responseBody.lastName, responseBody.accessToken, true);
        } catch (error) {
            console.log('onSubmit login error:', error);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
        if (event.target.checked) {
            clearErrors('checkboxValid');
        }
        console.log('acceptTnC:', event.target.checked);
    };

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

    const handleBlur = (field: keyof FormValues) => {
        if (!getValues(field)) {
            clearErrors(field);
        }
        setIsPopoverVisible(false);
    };

    const label = (
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
    );

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="right-form" noValidate>
                <div className="input-email-wrapper">
                    <span className="email-desc">Email</span>
                    <input
                        type="text"
                        {...register('email', {
                            pattern: {
                                value: /^([a-z0-9_.!#$%^&*-+()])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,6}$/i,
                                message: 'Please enter a valid email address',
                            },
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                        className={errors.email ? 'input-error input' : 'input'}
                        placeholder="name@email.com"
                        onBlur={() => handleBlur('email')}
                    />
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="input-password-wrapper">
                    <span className="password-desc">Password</span>
                    <input
                        type="password"
                        {...register('password', {
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message: 'Please select a strong password',
                            },
                            validate: {
                                minLength: (value) => value.length >= 8,
                            },
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                            onChange: (e) => setPassword(e.target.value),
                        })}
                        id="psw"
                        className={errors.password ? 'input-error input' : 'input'}
                        placeholder="8+ Characters"
                        onFocus={() => setIsPopoverVisible(true)}
                        onBlur={() => handleBlur('password')}
                    />
                    {isPopoverVisible && <Popover password={password} />}
                    <img src={passwordIcon} onClick={showPassword} id="pswIcon" className="password-image" alt="password-image" />
                    <p className="error-message">{errors.password?.message}</p>
                </div>
                <div className="agreement-wrapper">
                    <FormControlLabel
                        className="agreement-label"
                        control={
                            <Checkbox checked={acceptTnC} onChange={handleCheckboxChange} className="check-box" size="small" />
                        }
                        label={label}
                    />
                    <p className="error-message">{errors.checkboxValid?.message}</p>
                </div>
                <BlueBtn text="Create Free Account" classNames="agreement-btn" />
            </form>
        </div>
    );
};

export default SignUpForm;
