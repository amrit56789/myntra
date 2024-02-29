import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItems from '../components/CheckoutItem/CheckoutItems.js';

export default function Checkout() {
     const dispatch = useDispatch()

     return (
          <div className='w-5/6 mx-auto mb-12'>
               <CheckoutItems />
          </div>
     );
}
