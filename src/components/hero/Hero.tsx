import React from 'react';
import  HeroBackground  from '../../assets/images/bg';
import { Button } from '../button';
import './style.css';
export interface IHeroProps {

}

const Hero: React.FC<IHeroProps> = ({ }) => {
    return (
        <div className={"hero-container"}>
            <HeroBackground></HeroBackground>
            <div className={"title"}>
                <p>Be aware, Manage well.</p>
            </div>
            <div className={"hero-text"}>
                <p> Everyone experiences stress in different ways.
Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
            </div>
            <div className={"button-container"}>
                <Button label={'Find your way'} height={48} width={120}></Button>
            </div>
        </div>
    );
}

export default Hero