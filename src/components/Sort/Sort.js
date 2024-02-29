import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sort } from '../../actions/sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the icon

export default function Sort({ sortParameter }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const sortItems = [
        "Recommended",
        "What's New",
        "Popularity",
        "Price: High to Low",
        "Price: Low to High",
        "Better Discount",
        "Customer Rating",
        "Most Reviewed",
        "Recently Added"
    ];
    const dispatch = useDispatch();

    return (
        <div
            className="relative mx-4 mt-3 mb-4 mr-0 py-5 flex items-center border border-gray-300 rounded-lg h-9 w-80 self-end"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
        >
            <span className="pl-5 text-gray-600">
                Sort by :
            </span>
            <span className="ml-2 font-semibold">
                {sortParameter === null ? "Recommended" : sortParameter}
            </span>
            <span className="absolute right-2.5 top-2">
                <ExpandMoreIcon className="text-gray-200" style={{ fontSize: '24px' }} />
            </span>
            {isDropdownVisible && (
                <div className="absolute top-full left-0 mt-px w-full pt-2.5 pb-3.5 bg-white border border-t-0 border-gray-300 z-10">
                    {sortItems.map((sortOption, index) => (
                        <label className="flex items-center h-10 w-full pl-5 hover:bg-gray-100 cursor-pointer" key={index}>
                            <input
                                type="radio"
                                name="sort"
                                value={sortOption}
                                className="hidden"
                                onClick={(event) => {
                                    dispatch(sort(event.target.value));
                                    setIsDropdownVisible(false); // Optionally close dropdown on selection
                                }}
                            />
                            {sortOption}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
