import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.css';
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Wishlist } from "../../assets/images/heart.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modals';
import { search, toggleSearchState } from '../../actions/search';
export default function Navbar() {
    const { currentSearchQuery, isSearchActive } = useSelector(state => {
        return {
            currentSearchQuery: state.searchStore.query,
            isSearchActive: state.searchStore.isSearchActive
        }
    });
    const [query, setQuery] = useState(currentSearchQuery);
    console.log(currentSearchQuery, query);
    const dispatch = useDispatch();
    const navLinks = [
        "MEN",
        "WOMEN",
        "KIDS",
        "HOME & LIVING",
        "OFFERS"
    ];
    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        const path = `/shop`;
        navigate(path);
    };

    function searchQueryHandler(query) {
        query = query.trim();
        dispatch(search(query))
    }
    const bagItemCount = useSelector(state => state.bagStore.length);
    return (
        <div className="h-20 w-full justify-between items-center shadow-md sticky top-0 bg-white px-8 z-10 flex-row" >
            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className={isSearchActive ? "h-12 w-12 flex" : "h-12 w-12"}
                />
            </Link>
            <div className="nav-links-container flex-row">
                {navLinks.map((navLink, index) => (
                    <div key={index} className="mx-2.5 text-sm font-bold cursor-pointer" onClick={() => handleNavLinkClick(navLink)}>
                        {navLink}
                    </div>
                ))}
            </div>
            <div className={isSearchActive ? "relative flex-row center " : "flex relative flex-row center "}>
                <span
                    className="hidden text-3xl absolute text-[var(--lighter-color)] left-[9vw]"
                    onClick={() => {
                        dispatch(toggleSearchState(false))
                    }}
                >
                    <i class="fas fa-arrow-left"></i>
                </span>
                <Search
                    className="h-5 w-5 absolute left-4"
                    onClick={() => {
                        let searchQuery = query;
                        searchQueryHandler(searchQuery);
                    }}
                />
                <input
                    type="text"
                    className="search-box"
                    placeholder='Search for products, brands...'
                    value={query !== null ? query : ""}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            let searchQuery = query;
                            searchQueryHandler(searchQuery);
                        }
                    }}
                >
                </input>
                <span
                    className={(query === null || query === "") ? "hide" : "clear-query-button"}
                    onClick={() => {
                        setQuery(null);
                        searchQueryHandler(null)
                    }}
                >
                    <i class="far fa-times-circle"></i>
                </span>
            </div>
            <div className={isSearchActive ? "mobile-hide action-container flex-row" : "action-container flex-row"}  >
                <div
                    className="action-item mobile-search-button"
                    onClick={() => dispatch(toggleSearchState(true))}
                >
                    <Search className="action-icon" />
                </div>
                <div className="action-item" >
                    <Profile className="action-icon" />
                    <p className="action-text">Profile</p>
                </div>
                <div className="action-item"
                    onClick={() => dispatch(openModal('wishlist'))}
                >
                    <Wishlist className="action-icon" />
                    <p className="action-text">Wishlist</p>
                </div>
                <div className="action-item"
                    onClick={() => dispatch(openModal('bag'))}
                >
                    <Bag className="action-icon" />
                    {bagItemCount !== 0 && <p className="bag-item-count">{bagItemCount} </p>}
                    <p className="action-text">Bag</p>
                </div>
            </div>
        </div>
    )
}
