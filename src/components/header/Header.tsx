import React from 'react';

import { Button } from '../button';

import './style.css';

export interface IHeaderProps {
    
}

const Header: React.FC<IHeaderProps> = ({ }) => {
    return (
        <div className={'header-container'}>
            <div className={"logo"}>
                <p>Alivio</p>
            </div>
            <ul className={"header-options"}>
                <li>Why Alivio</li>
                <li>Solutions</li>
                <li>Community</li>
                <li>Pricing</li>
            </ul>
            <span className={"signin-link"}>Sig In</span>
            <Button label={'Free Trial'} height={32} width={120}></Button>
        </div>
    );
}

export default  Header;