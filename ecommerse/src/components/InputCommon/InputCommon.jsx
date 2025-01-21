import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false }) {
    const { container, labelInput, boxInput, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const iShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={iShowTextPassword} />
                <div>
                    {isPassword && (
                        <div className={boxIcon} onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InputCommon;
