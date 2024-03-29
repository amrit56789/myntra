import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishList from '../components/Wishlist/Wishlist.js';

export default function Wishlist() {
     const dispatch = useDispatch()
     const wishlist = useSelector(state => state.wishlistStore);

     return (
          <div className='w-5/6 mx-auto mb-12'>
               <WishList wishlist={wishlist} />
          </div>
     );
}
