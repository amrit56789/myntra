import React from 'react'
import { ProductListContainer, FilterContainer } from '../containers/index.js';
import { AddSlider, AdsCaro, Card } from "../components/index.js"
import { fetchProducts } from '../actions/products.js';
import { Breadcrumb } from '../components/index.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productStore);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            <AddSlider />
            <AdsCaro heading={"medal worthy brands to bag"} />
            <Card />
            {/* <Breadcrumb /> */}
            {/* <FilterContainer /> */}
            {/* <ProductListContainer products={products} /> */}
        </div>
    )
}
