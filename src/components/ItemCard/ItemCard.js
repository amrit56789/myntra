import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItemToWishlist } from '../../actions/wishlist';

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
        <div className="max-w-xs ml-2 sm:max-w-xs md:max-w-52 lg:max-w-xs xl:max-w-xs mx-auto overflow-hidden relative m-4 group"
            onMouseEnter={() => {
                setShowWishlist(true);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setShowWishlist(false);
                setIsHovered(false);
            }}>
            <Link to={`/${item.id}`} className="block relative overflow-hidden">
                <div className="flex w-full" style={getTransformStyle()}>
                    {item.images.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index}`} className="w-1/5" style={{ minWidth: '100%' }} />
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
                        className="border w-full border-gray-300 rounded-lg px-6 py-2 sm:py-2 text-sm hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                        onClick={() => dispatch(addItemToWishlist(item))}
                    >
                        Wishlist
                    </button>
                </div>
            )}
            <div className="p-4">
                {!showWishlist && (
                    <div>
                        <h3 className="text-sm sm:text-lg md:text-base lg:text-lg font-bold mb-1">{item.brandName}</h3>
                        <p className="text-xs sm:text-sm md:text-xs lg:text-sm truncate mb-1">{item.productName}</p>
                    </div>

                )}
                <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base lg:text-base md:text-sm font-bold">₹{item.price}</span>
                    <span className="text-xs sm:text-sm md:text-sm  lg:text-base line-through text-gray-400">₹{item.originalPrice}</span>
                    <span className="text-xs sm:text-sm md:text-xs lg:text-base text-red-500">({item.discountPercent}% OFF)</span>
                </div>

            </div>
        </div>
    );
}
