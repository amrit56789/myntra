import React from 'react'
import { FilterContainer, ProductDetailsContainer, ProductSamplesContainer } from '../containers/index';
import { ProductSampleCarousel } from '../components/index';
import { Breadcrumb } from '../components/index.js';
import { useParams } from "react-router-dom";
import { products } from '../utils/Products.js';
export default function Product() {
    // console.log(products);
    let { productID } = useParams();
    const product = products.filter(item => item.id == productID)[0];
    return (
        <div>
            <Breadcrumb addItem={product} />
            <FilterContainer />
            <ProductSampleCarousel product={product} />
            <ProductSamplesContainer product={product} />
            <ProductDetailsContainer product={product} />
        </div>
    )
}
