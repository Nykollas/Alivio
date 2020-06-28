import React from 'react';
import Button from '../button/Button';
export interface IProductDataProps {

}

const ProductData: React.FC<IProductDataProps> = ({ }) => {
    return (
        <div className={"product-data-container"}>
            <p className={"data-label"}>Our Product</p>
            <p className={"data-slogan"}>You tell us your stress, we  make  your  diary </p>
            <p className={"data-text"}>
                Everyone experiences it, and in different ways.
                Let Alivio guide you, in a personalized journal experience, to overcome your stress.
            </p>
            <Button label={"Find Your Way"} height={56} width={160}></Button>
        </div>

    );
}

export { ProductData };