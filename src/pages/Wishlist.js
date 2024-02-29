import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { addItemToBag } from '../actions/bag.js';
import { useNavigate } from 'react-router-dom';
import { removeItemFromWishlist } from '../actions/wishlist.js';

export default function Wishlist() {
     const dispatch = useDispatch()
     const navigate = useNavigate();

     const wishlist = useSelector(state => state.wishlistStore);
     const handleMoveToBagItems = (items) => {
          dispatch(addItemToBag(items))
     }

     const handleShopping = () => {
          const path = "/shop"
          navigate(path)
     }

     const handleRemoveItem = (item) => {
          dispatch(removeItemFromWishlist(item))
     }
     return (
          <div className='w-5/6 mx-auto mb-12'>
               {wishlist.length ? (
                    <div>
                         <h1 className='font-bold text-2xl text-center mt-16 mb-8'>My WishList <span>{wishlist.length} Items</span></h1>
                         <div className='grid grid-cols-1 w-3/4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                              {wishlist.map((item) => (
                                   <div key={item.id} className='border rounded-lg relative'>
                                        <button
                                             onClick={() => handleRemoveItem(item)}
                                             className='absolute -top-1 right-1 px-2 text-3xl text-center font-bold text-red-500'
                                        >
                                             &times;
                                        </button>
                                        <div>
                                             <img src={item.images[0]} alt={`${item.brandName} product`} className='w-full' />
                                             <h3 className='text-lg font-semibold mt-2 ml-4'>{item.brandName}</h3>
                                        </div>
                                        <div className='flex items-center my-2'>
                                             <p className='text-black font-bold ml-6'>Rs.{item.price}</p>
                                             <p className='text-xs text-gray-400 mx-2 line-through'>{item.originalPrice}</p>
                                             <p className='mx-2 font-semibold text-sm text-yellow-500'>({item.discountPercent}% OFF)</p>
                                        </div>
                                        <button
                                             onClick={() => { handleMoveToBagItems(item) }}
                                             className='w-full border-t py-2 text-sm text-red-500 font-bold'
                                        >
                                             Move to Bag <br />
                                             <p className='text-xs text-red-500 font-semibold'>BUY WITH EARLY ACCESS</p>
                                        </button>
                                   </div>
                              ))}
                         </div>
                    </div>
               ) : (
                    <div className="flex flex-col justify-center items-center h-screen">
                         <p className="text-2xl font-bold mb-12">YOUR WISHLIST IS EMPTY</p>
                         <p className="text-xl text-gray-400 mt-2 w-3/4 md:w-1/2 mb-12">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
                         <button className="mt-4 border border-indigo-600 text-blue-700 font-bold py-4 px-16 rounded-md" onClick={handleShopping}>CONTINUE SHOPPING</button>
                    </div>
               )}
          </div>
     );
}
