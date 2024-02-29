import React from 'react'
import { ProductListContainer, FilterContainer } from '../containers/index.js';
import { fetchProducts } from '../actions/products.js';
import { Breadcrumb } from '../components/index.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Shops() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productStore);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div className='w-5/6 mx-auto'>
            <Breadcrumb addItem={products} />
            <FilterContainer />
            <ProductListContainer products={products} />
        </div>
    )
}
