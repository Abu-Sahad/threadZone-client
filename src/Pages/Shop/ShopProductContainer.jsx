import React from 'react';
import { AllProvider } from '../../Contexts/AllContext';
import ShopProduct from './ShopProduct';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import ProductContainer from '../Product/ProductContainer';
import { ProductProvider } from '../../Contexts/ProductContext';
import ShopSingle from './ShopSingle/ShopSingle';

const ShopProductContainer = () => {
    const params = useParams();
    return (
        <div>
            <ProductProvider>
                <ShopSingle shopId={params.id}/>
            </ProductProvider>
        </div>
    );
};

export default ShopProductContainer;