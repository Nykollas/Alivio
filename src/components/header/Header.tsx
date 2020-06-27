import React from 'react';
import './style.css';

export interface IHeaderProps {
    
}

const Header: React.FC<IHeaderProps> = ({ }) => {
    return (
        <div className={'header-container'}>
            <div className={"logo"}>
                <title>Alivio</title>
            </div>
            <ul className={"header-options"}>
                <li>Why Alivio</li>
                <li>Solutions</li>
                <li>Community</li>
                <li>Pricing</li>
            </ul>
            <span className={"signin-link"}>Sig In</span>
            <button className={"signup-button"}>
                <span>Start Trial</span>
            </button>
        </div>
    );
}

export default  Header;