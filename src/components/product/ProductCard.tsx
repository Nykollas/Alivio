import React from 'react';
import ProductImage from '../../assets/images/product';
import UserProfile from '../../assets/images/userprofile';
export interface IProductCardProps {

}

const ProductCard: React.FC<IProductCardProps> = ({ }) => {
    return (
        <div className="product-card-container">
            <div className={"product-image"}>
                <ProductImage></ProductImage>
            </div>
            <div className={"product-card"}>
                <div className={"product-card-header"}>
                    <p> Customized for</p>
                </div>
                <div className={"product-profile-image"}>
                    <UserProfile></UserProfile>
                </div>
                <div className={"product-user-name"}>
                    <p> Mikayla </p>
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
    );
}

export { ProductCard };