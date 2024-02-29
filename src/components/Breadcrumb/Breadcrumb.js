import React from 'react';
import { Link } from "react-router-dom";

export default function Breadcrumb({ addItem }) {
    const breadCrumb = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Myntra Fashion Store',
            link: '/'
        },
    ];

    if (addItem) {
        breadCrumb.push({
            name: addItem.productName,
            link: `/${addItem.id}`
        });
    }

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center overflow-hidden whitespace-nowrap bg-white pl-6">
                {breadCrumb.map((bread, index) => (
                    <div key={index} className="text-sm">
                        <Link
                            to={bread.link}
                            className={`hover:cursor-pointer ${bread.name === 'Myntra Fashion Store' ? 'font-bold text-base' : 'text-base'}`}>
                            {bread.name}
                        </Link>
                        {index < breadCrumb.length - 1 && <span className="mx-2">/</span>}
                    </div>
                ))}
            </div>

            <div className='flex items-center text-base pl-6 bg-white overflow-hidden whitespace-nowrap my-4'>
                <span className='font-bold text-base'>Myntra Fashion Store</span>
                <span className='text-gray-400 ml-1 text-base'> - {addItem.length} items</span>
            </div>
        </div>
    )
}
