import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItemToWishlist } from '../../actions/wishlist';
import { ViewCarouselOutlined } from '@mui/icons-material';

export default function MyntraProductCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        let interval;
        if (isHovered && item.images && item.images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex(currentIndex => (currentIndex + 1) % item.images.length);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isHovered, item.images]);

    const renderIndicatorDots = () => {
        return item.images.map((_, index) => (
            <span
                key={index}
                className={`inline-block h-2 w-2 mx-1 rounded-full ${currentImageIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                style={{ transition: 'background-color 0.3s ease' }}
            ></span>
        ));
    };
    const getTransformStyle = () => ({
        transform: `translateX(-${currentImageIndex * 100}%)`,
        transition: 'transform 1s ease-out',
    });

    return (
        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-lg relative m-4 group"
            onMouseEnter={() => {
                setShowWishlist(true);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setShowWishlist(false);
                setIsHovered(false);
            }}>
            <Link to={`/${item.id}`} className="block relative overflow-hidden">
                <div className="flex" style={getTransformStyle()}>
                    {item.images.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index}`} className="w-full object-cover" style={{ minWidth: '100%' }} />
                    ))}
                </div>
            </Link>
            {isHovered && (
                <div className="mt-2 flex justify-center pb-2">
                    {renderIndicatorDots()}
                </div>
            )}
            {showWishlist && (
                <div className="flex justify-center gap-2 p-2 w-full">
                    <button
                        className="border w-full border-gray-300 rounded-lg px-6 py-2 text-sm hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                        onClick={() => dispatch(addItemToWishlist(item))}
                    >
                        Wishlist
                    </button>
                </div>
            )}
            <div className="p-4">
                {!showWishlist && (
                    <div>
                        <h3 className="text-lg font-bold mb-1">{item.brandName}</h3>
                        <p className="text-sm truncate mb-1">{item.productName}</p>
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹{item.price}</span>
                    <span className="text-sm line-through text-gray-400">₹{item.originalPrice}</span>
                    <span className="text-sm text-red-500">({item.discountPercent}% OFF)</span>
                </div>
            </div>
        </div>
    );
}