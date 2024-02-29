// this component is to display gender filter
import React from 'react';
import './Filters.css';
import { useDispatch } from 'react-redux';
import { addGenderFilter } from '../../actions/filters';
export default function Gender({ activeFilter }) {
    const Genders = [
        "Men",
        "Women",
        "Boys",
        "Girls",
    ];
    const dispatch = useDispatch();
    return (
        <div className="specific-filter-container">
            {
                Genders.map((gender, index) => {
                    return (
                        <label className="filter-label font-bold text-neutral-800	" key={index}>
                            <input
                                type="radio" name="gender"
                                value={gender}
                                checked={activeFilter?.toLowerCase() === gender.toLowerCase()}
                                onClick={(event) => dispatch(addGenderFilter(event.target.value))}
                            ></input>
                            <span className="filter-name text-neutral-800 text-md font-bold">
                                {gender}
                            </span>
                        </label>
                    )
                })
            }
        </div>
    )
}
