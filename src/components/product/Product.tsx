import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductData } from './ProductData';
import './style.css';

export interface IProductProps {
    
}

const Product: React.FC<IProductProps> = ({ }) => {
    return (
        <div className={"product-container"}>
                
                        <ProductCard ></ProductCard>
                        <ProductData></ProductData>
                
        </div>
    );
}

export default Product;