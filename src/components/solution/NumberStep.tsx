import React from 'react';

export interface INumberStepProps {
    number:number,
    title:string
}

const NumberStep: React.FC<INumberStepProps> = ({title, number }) => {
    return (
        <div className={"number-step-container"}>
            <span>{number}</span>
            <p>{title}</p>
        </div>
    );
}

export default NumberStep;