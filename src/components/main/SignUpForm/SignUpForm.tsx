import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import passwordIcon from '../../../assets/images/password-icon.svg';
import showPasswordIcon from '../../../assets/images/show-password.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import acceptImg from '../../../assets/images/accept.svg';
import rejectImg from '../../../assets/images/reject.svg';
import { FormControlLabel, Checkbox } from '@mui/material';
import { LoginStore, useLoginStore } from '../../../zustand-state/ZustandState';

const API_URL = 'https://eo1ahyv4yhhcnmc.m.pipedream.net';

type FormValues = {
    email: string;
    password: string;
    checkboxValid: boolean;
};

const SignUpForm = () => {
    const setData = useLoginStore((store) => store.setValue);
    const [acceptTnC, setAcceptTnC] = useState(false);

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
            setData(responseBody.name, responseBody.lastName, responseBody.accessToken);
            alert('Succes');
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

    const accept = <img src={acceptImg} alt="#!" />; // Password Icon
    const reject = <img src={rejectImg} alt="#!" />; // Password Icon

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
                    />
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="input-password-wrapper">
                    <span className="password-desc">Password</span>
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
                        className={errors.password ? 'input-error input' : 'input'}
                        placeholder="8+ Characters"
                    />
                    <UncontrolledPopover trigger="focus" placement="top" target="psw">
                        <PopoverBody className="popover">
                            <li>
                                {/.{8,64}/.test(getValues('password')) ? accept : reject} {'8-64 characters'}
                            </li>
                            <li>
                                {/[A-ZА-ЯЁ\d]+/.test(getValues('password')) ? accept : reject} {'numbers or UPPER case letter'}
                            </li>
                            <li>
                                {/[a-zа-яё]+/.test(getValues('password')) ? accept : reject} {'lower case letter'}
                            </li>
                        </PopoverBody>
                    </UncontrolledPopover>
                    <img src={passwordIcon} onClick={showPassword} id="pswIcon" className="password-image" alt="password-image" />
                    <p className="error-message">{errors.password?.message}</p>
                </div>
                <div className="agreement-wrapper">
                    <FormControlLabel
                        className="agreement-label"
                        control={
                            <Checkbox
                                checked={acceptTnC}
                                onChange={handleCheckboxChange}
                                style={{ padding: '0', marginRight: '-5px', top: '2px', left: '-15px' }}
                                id="check-box"
                                size="small"
                            />
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
