import React from 'react';
import './style.css';
export interface IProductProps {
    
}

const Product: React.FC<IProductProps> = ({ }) => {
    return (
        <div className={"product-container"}>
                <div className={"product-image-container"}>
                    <div className={"product-image"}>
                    </div>
                    <div className="product-card-container">
                            <div className={"product-card-header"}>

                            </div>
                            <div className={"product-profile-image"}>
                                <div>

                                </div>
                            </div>
                            <div className={"product-user-name"}>

                            </div>
                            <p className={"product-title"}>
                                Your custom contents
                            </p>
                            <ul>
                                <li>Understand Your Stress</li>
                                <li>Anger Management</li>
                            </ul>
                    </div>

                </div>
        </div>
    );
}

export default Product;