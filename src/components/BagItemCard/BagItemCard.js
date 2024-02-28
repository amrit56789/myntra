import React from 'react'
import { Link } from 'react-router-dom';
import { setQuantity, setSize, removeItemFromBag } from '../../actions/bag';
import { addItemToWishlist, removeItemFromWishlist } from '../../actions/wishlist';
import { isInWishList } from '../../helpers/general';
import { useDispatch, useSelector } from 'react-redux';
export default function BagItemCard({ item }) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistStore);
    let isWishListed = isInWishList(wishlist, item)
    const sizes = [38, 40, 42, 44, 46];
    return (
        <div className="w-82 h-34 border border-[#cf9999] m-4 relative">
            <Link to={`/${item.id}`}>
                <div className="inline-block w-25 h-34">
                    <img src={item.images[0]} alt="product" className="w-full h-full" />
                </div>
            </Link>
            <div className="inline-flex flex-col items-center justify-center w-50 p-2.5">
                <Link to={`/${item.id}`}>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm mb-2.5">{item.productName}</div>
                    <div>
                        <span className="text-sm font-bold">Rs.{item.price}</span>
                        <span className="text-xs line-through text-[var(--lighter-color)]">Rs.{item.originalPrice}</span>
                        <span className="text-xs font-bold text-[#ff905f]">({item.discountPercent}% OFF)</span>
                    </div>
                </Link>
                <div className="mt-2.5 ml-2.5 relative">
                    <button
                        className="absolute top-1 right-1 text-[var(--lightest-color)] text-3xl border-none bg-transparent"
                        onClick={() => dispatch(removeItemFromBag(item))}
                    >
                        <i class="fas fa-times-circle"></i>
                    </button>
                    <button
                        className={`absolute top-9 right-1 text-red-600 text-3xl border-none bg-transparent ${isWishListed ? 'hidden' : 'block'}`}
                        onClick={() => dispatch(addItemToWishlist(item))}
                    >
                        <i class="far fa-heart"></i>
                    </button>
                    <button
                        className={`absolute top-9 right-1 text-red-600 text-3xl border-none bg-transparent ${!isWishListed ? 'hidden' : 'block'}`}
                        onClick={() => dispatch(removeItemFromWishlist(item))}
                    >
                        <i class="fas fa-heart"></i>
                    </button>
                    {/* Close button (X) */}
                    <button
                        className="absolute top-1 right-1 text-xl text-gray-700 bg-transparent hover:bg-gray-200 p-1 rounded-full"
                        onClick={() => { /* function to close/hide the box */ }}
                    >
                        X
                    </button>
                    <div>
                        <span className="text-xs">Qty : </span>
                        <span
                            onClick={() => dispatch(setQuantity(item, item.quantity - 1))}
                            className="cursor-pointer"
                        >
                            <i class="fas fa-minus-square text-3xl text-cyan-600"></i>
                        </span>
                        <span className="text-base font-bold mx-2.5">{item.quantity}</span>
                        <span
                            onClick={() => dispatch(setQuantity(item, item.quantity + 1))}
                        >
                            <i class="fas fa-plus-square text-3xl text-cyan-600"></i>
                        </span>
                    </div>
                    <div>
                        <span className="text-xs">Size : </span>
                        {
                            sizes.map((size, index) => {
                                return (
                                    <>
                                        <input
                                            type="radio"
                                            name={`${item.id}-item-size`}
                                            value={size}
                                            className="hidden"
                                            id={`${item.id}${index}`}
                                            onClick={() => dispatch(setSize(item, size))}
                                            checked={item.size === size}
                                        />
                                        <label htmlFor={`${item.id}${index}`} className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-gray-200 m-1 text-xs cursor-pointer hover:border-black">
                                            {size}
                                        </label>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
