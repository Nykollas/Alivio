import React from 'react';
import SolutionStep from './SolutionStep';
import ImageOne from '../../assets/images/step1';
import ImageTwo from '../../assets/images/step2';
import ImageThree from '../../assets/images/step3';
import './style.css';


export interface ISolutionProps {

}

const Solution: React.FC<ISolutionProps> = ({ }) => {
    return (
        <div className={"solution-container"}>
            <div className={"row"}>
                <div className={"solution-title"}>
                    <p>How it works</p>
                    <title>Understand & Release the stress in 3 steps</title>
                </div>
                <div className={"solution-description"}>
                    <p> Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
                    </p>
                </div>
            </div>
            <div className={"row"}>
                <SolutionStep data = {"Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!"}
                              imgData = {<ImageOne width={278} height={350}></ImageOne>}
                              number = {1}
                              title = {"Personalize"}>
                </SolutionStep>
                <SolutionStep data={"Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!"}
                              imgData = {<ImageTwo width={278} height={350}></ImageTwo>}
                              number = {2}
                              title = {"Write and Understand"}>
                </SolutionStep>
                <SolutionStep data = {"Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!"}
                              imgData = {<ImageThree width={278} height={350}></ImageThree>}
                              number = {3}
                              title = {"Alivio!"}>
                </SolutionStep>
            </div>

        </div>
    );
}

export default Solution;