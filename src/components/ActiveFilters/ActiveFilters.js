import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    removeGenderFilter,
    removePriceFilter,
    removeDiscountFilter,
    removeColorFilter,
} from '../../actions/filters';

export default function ActiveFilter() {
    const activeGenderFilter = [];
    const activeDiscountFilter = [];
    const activeColorFilter = [];
    const activePriceFilter = [];
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filtersStore);
    const { gender, discount, color, price } = filters;

    if (gender) activeGenderFilter.push(gender);
    if (discount) activeDiscountFilter.push(discount);
    color.forEach((color) => {
        activeColorFilter.push(color);
    });
    price.forEach((price) => {
        activePriceFilter.push(price);
    });

    return (
        <div className="flex flex-row flex-wrap">
            {activeGenderFilter.map((gender, key) => (
                <div className="flex flex-row items-center m-1 p-2 bg-gray-200 rounded" key={key}>
                    {gender}
                    <span onClick={() => dispatch(removeGenderFilter(gender))} className="ml-2 cursor-pointer">
                        <i className="fas fa-times text-gray-600"></i>
                    </span>
                </div>
            ))}
            {activeDiscountFilter.map((discount, key) => (
                <div className="flex flex-row items-center m-1 py-2 px-4 rounded-3xl text-sm text-black border" key={key}>
                    {discount}% and above
                    <span onClick={() => dispatch(removeDiscountFilter(discount))} className="cursor-pointer">
                        <i className="fas fa-times text-gray-600"></i>
                    </span>
                </div>
            ))}
            {activeColorFilter.map((color, key) => (
                <div className="flex flex-row items-center m-1 p-2 bg-gray-200 rounded" key={key}>
                    {color}
                    <span onClick={() => dispatch(removeColorFilter(color))} className="ml-2 cursor-pointer">
                        <i className="fas fa-times text-gray-600"></i>
                    </span>
                </div>
            ))}
            {activePriceFilter.map((price, key) => (
                <div className="flex flex-row items-center m-1 p-2 bg-gray-200 rounded" key={key}>
                    Rs. {price.start} to Rs. {price.end}
                    <span onClick={() => dispatch(removePriceFilter(price))} className="ml-2 cursor-pointer">
                        <i className="fas fa-times text-gray-600"></i>
                    </span>
                </div>
            ))}
        </div>
    );
}
