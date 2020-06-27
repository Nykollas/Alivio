import React from 'react';

export interface IButtonProps {
    label: string,
    width: number,
    height: number
}

const Button: React.FC<IButtonProps> = ({ }) => {
    return (
        <button className={'button'}>
        </button>
    ); 
}

export default Button;