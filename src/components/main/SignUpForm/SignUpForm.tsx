import React, { useState, useRef, useEffect } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DevTool } from '@hookform/devtools';
import passwordIcon from '../../../assets/images/password-icon.svg';
import showPasswordIcon from '../../../assets/images/show-password.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import acceptImg from '../../../assets/images/accept.svg';
import rejectImg from '../../../assets/images/reject.svg';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
// const API_URL = 'https://jsonplaceholder.typicode.com';

type FormValues = {
    email: string;
    password: string;
    checkboxValid: boolean;
};

const SignUpForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });
    const {
        register,
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        setError,
    } = form;

    const onSubmit = (data: FormValues) => {
        try {
            throw new Error();
        } catch (error) {
            setError('email', {
                message: 'This email already taken',
            });
        }
    };

    const handleGetValues = () => {
        console.log('Get Values', getValues());
    };

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const response = await fetch(`${API_URL}/posts`);
    //         const posts = (await response.json()) as FormValues[];

    //         getValues();
    //     };
    // }, []);

    const accept = <img src={acceptImg} alt="#!" />; //Password Icon
    const reject = <img src={rejectImg} alt="#!" />; //Password Icon

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
                    <FormGroup>
                        <FormControlLabel
                            className="agreement-label"
                            control={
                                <Checkbox style={{ padding: '0', top: '1px', left: '30px', marginRight: '40px' }} size="small" />
                            }
                            label={label}
                        />
                    </FormGroup>
                    {/* <Checkbox {...label} size="small" className="check-box" /> */}
                </div>
                <BlueBtn text="Create Free Account" classNames="agreement-btn" onClick={handleGetValues} />
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default SignUpForm;
