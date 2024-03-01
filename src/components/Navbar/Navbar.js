import React from "react";
import { FavoriteBorder, ShoppingBagOutlined, PermIdentity } from '@mui/icons-material';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../actions/modals";
import { search, toggleSearchState } from "../../actions/search";

export default function Navbar() {
    const { currentSearchQuery, isSearchActive } = useSelector((state) => {
        return {
            currentSearchQuery: state.searchStore.query,
            isSearchActive: state.searchStore.isSearchActive,
        };
    });
    const [query, setQuery] = useState(currentSearchQuery);
    console.log(currentSearchQuery, query);
    const dispatch = useDispatch();
    const navLinks = [
        "MEN",
        "WOMEN",
        "KIDS",
        "HOME & LIVING",
        "BEAUTY",
        "STUDIO",
    ];
    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        const path = `/shop`;
        navigate(path);
    };
    const handleWishList = () => {
        const path = "/wishlist"
        navigate(path)
    }

    const handleCheckout = () => {
        const path = "/checkout/cart"
        navigate(path)
    }

    function searchQueryHandler(query) {
        query = query.trim();
        dispatch(search(query));
    }
    const bagItemCount = useSelector((state) => state.bagStore.length);
    return (
        <div className="h-20 w-full flex justify-between items-center sticky top-0 bg-white z-10 mb-8 font-sans">
            <div className="flex items-center justify-between w-1/3 ml-24 mt-4">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className={isSearchActive ? "h-12 w-16 flex" : "h-14 w-14"}
                    />
                </Link>
                <div className="flex flex-row">
                    {navLinks.map((navLink, index) => (
                        <div
                            key={index}
                            className="relative mx-4 text-xs font-bold cursor-pointer tracking-wider text-gray-700"
                            onClick={() => handleNavLinkClick(navLink)}
                        >
                            {navLink}
                            {navLink === "STUDIO" && (
                                <div className="absolute -top-3 -right-9 text-white text-xs p-1 font-bold" style={{ color: "#FF487A" }}>
                                    NEW
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-between items-center w-2/4 mt-4">
                <div className="relative w-2/4">
                    <input
                        type="text"
                        className="w-full pl-20 pr-3 py-2 rounded-md border border-transparent focus:outline-none focus:border-gray-300"
                        placeholder="Search for products, brands and more"
                        value={query !== null ? query : ""}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                let searchQuery = query;
                                searchQueryHandler(searchQuery);
                            }
                        }}
                    />

                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                <div className={isSearchActive ? "" : "flex justify-between items-center w-52 mr-16"}>
                    <div className="flex flex-column items-center" >
                        <PermIdentity className="w-6" />
                        <p className="font-semibold text-xs">Profile</p>
                    </div>
                    <div className="flex flex-column items-center cursor-pointer" onClick={handleWishList}>
                        <FavoriteBorder className="w-6" />
                        <p className="font-semibold text-xs">Wishlist</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer" onClick={handleCheckout}>
                        <div className="relative">
                            <ShoppingBagOutlined className="w-6 h-6" />
                            {bagItemCount !== 0 && (
                                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {bagItemCount}
                                </div>
                            )}
                        </div>
                        <p className="font-semibold text-xs">Bag</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
