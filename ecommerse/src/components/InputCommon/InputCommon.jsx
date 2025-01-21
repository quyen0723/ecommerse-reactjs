import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
    const [showPassword, setShowPassword] = useState(false);
    const { formik, id } = props;
    const isPassword = type === 'password';
    const iShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={iShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                <div>
                    {isPassword && (
                        <div className={boxIcon} onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    )}

                    {isErr && <div className={errMsg}>{messageErr}</div>}
                </div>
            </div>
        </div>
    );
}

export default InputCommon;
