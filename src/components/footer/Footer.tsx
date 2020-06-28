import React from 'react';
import './style.css'
export interface IFooterProps {
    
}

const Footer: React.FC<IFooterProps> = ({ }) => {
    return (
        <div className={"footer-container"}>
                <div className={"footer-options-container"}>
                    <p>Alivio</p>
                    <ul className="footer-options">
                        <li>
                            Why Alivio
                        </li>
                        <li>
                            Solutions
                        </li>
                        <li>
                            Community
                        </li>
                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Footer