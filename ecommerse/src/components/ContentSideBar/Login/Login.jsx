import InputCommon from '@components/InputCommon/InputCommon';
import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
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
                .required('Password equired')
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });

    // console.log('Form submitted', formik.errors);
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    formik={formik}
                />
                {/* {formik.errors.email && formik.touched.email && (
                    <div className={styles.errors}>{formik.errors.email}</div>
                )} */}
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    formik={formik}
                />

                {/* {formik.errors.password && formik.touched.password && (
                    <div className={styles.errors}>
                        {formik.errors.password}
                    </div>
                )} */}

                <div className={boxRememberMe}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>

                <Button content={'LOGIN'} type='submit' />
            </form>
            <div className={lostPw}>Lost your password</div>
        </div>
    );
}

export default Login;
