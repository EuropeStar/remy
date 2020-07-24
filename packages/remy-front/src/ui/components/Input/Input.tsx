import React from 'react';
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string
}

export const Input: React.FC<InputProps> = ({error, label, ...props}: InputProps): JSX.Element => {
    return (
        <div className="Input-container">
            {label && <label className="Input-label">{label}</label>}
            <input {...props} className={`Input ${error && "Input-error"}`} />
            {error && <label className="Input-label-error">{error}</label>}
        </div>
    )
}