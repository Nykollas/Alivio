import React from 'react';
import './style.css';
export interface IButtonProps {
    label: string,
    width: number,
    height: number
}

const Button: React.FC<IButtonProps> = ({label, width, height }) => {
    return (
        <button className={'button'} style={{width, height}}>
            {label}
        </button>
    ); 
}

export default Button;