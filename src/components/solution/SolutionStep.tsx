import React from 'react';
import NumberStep from './NumberStep';
export interface ISolutionStepProps {
    imgData:React.ReactNode,
    data:string
    number:number,
    title:string
}

const SolutionStep: React.FC<ISolutionStepProps> = ({data, imgData, number, title }) => {
    return (
        <div>
            <NumberStep 
                    number={number}
                    title={title}>
            </NumberStep>
            <p>
                {data}

            </p>
            <div className={"image-container"}>
                {imgData}
            </div>

        </div>
    );
}

export default SolutionStep;