import InputCommon from '@components/InputCommon/InputCommon';
import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToasProvider';
import { register } from '@/apis/authService';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Password equired'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
            if (isLoading) return;

            if (isRegister) {
                const { email: username, password } = values;
                setIsLoading(true);
                await register({ username, password }).then((res) => {
                    console.log(res);
                    toast.success(res.data.message);
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message);
                    setIsLoading(false);
                });
            }
        }
    });

    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Toggle register/login form
     * @function
     * @returns {void}
     */
    /******  ba72ddc8-a9f1-4d79-b87d-a24aa11811c2  *******/
    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    // console.log('Form submitted', formik.errors);
    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={isLoading ? "LOADING..." : isRegister ? 'REGISTER' : 'LOGIN'}
                    type='submit'
                    style={{ marginTop: '10px' }}
                // onClick={() => toast.success('Login success')}
                />
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : `Don't have an account?`
                }
                type='submit'
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPw}>Lost your password</div>}
        </div>
    );
}

export default Login;
