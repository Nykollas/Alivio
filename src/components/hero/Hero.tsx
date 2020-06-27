import React from 'react';

export interface IHeroProps {

}

const Hero: React.FC<IHeroProps> = ({ }) => {
    return (
        <div className={"hero-container"}>
            i<div>
                <p>Be aware, Manage well</p>
            </div>
            <div>
                <p> Everyone experiences stress in different ways.
Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
            </div>
            <button className={"button"}>Find your way</button>
        </div>
    );
}

export default Hero