import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagItemCard, Empty } from '../../components/index';
import { emptyBag, removeItemFromBag } from '../../actions/bag';
import { useDispatch, useSelector } from 'react-redux';
import { findTotal } from '../../helpers/general';
import { NavigateNext, TurnedIn, TurnedInNot } from '@mui/icons-material';
import gift from "../../assets/images/gift.png"
export default function CheckoutItems() {
     const bag = useSelector(state => state.bagStore);
     const navigate = useNavigate()
     const dispatch = useDispatch();
     const [showMore, setShowMore] = useState(false);

     function checkOutHandler(event) {
          console.log("check out");
          let checkoutCheck = true;
          bag.map(product => {
               if (product.size === undefined) {
                    window.alert('Please select size for ' + product.productName);
                    checkoutCheck = false;
                    return;
               }
          })
          if (checkoutCheck) {
               dispatch(emptyBag());
          }
     }


     const handleWishListButton = () => {
          const path = "/wishlist"
          navigate(path)
     }

     const handleRemoveItem = (product) => {
          console.log("hellow")
          dispatch(removeItemFromBag(product))
     }

     const offers = [
          "10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA",
          "10% Instant Discount on Citi Credit and Debit Cards on a min spend of ₹4,000. TCA",
          "7.5% Instant Discount + Extra 5% Discount up to ₹750 on every spends with Myntra Kotak Credit Card. TCA",
          "Flat ₹25 Cashback on CRED pay UPI (Android Devices only) on a minimum spend of ₹2,000. TCA",
          "Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA",
          "Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA",
          "Get up to 15% cashback on Mobikwik Wallet transaction on a min spend of ₹1500. Use Code MBK15 on Mobikwik. TCA"
     ];
     const displayedOffers = showMore ? offers : offers.slice(0, 3);
     const toggleShowMore = () => {
          setShowMore(!showMore);
     };
     return (
          <div className="w-3/4 mx-auto mb-12 flex justify-between" >
               <div className='first-block w-3/5 flex justify-start flex-column'>
                    <div className='address border p-4 flex justify-between items-center'>
                         <div className='text-sm'>
                              <p>Deliver to : <strong>Amrit Singh, 110084</strong></p>
                              <p className='text-gray-400'>House no 3752 Street No 102 B Block Apex Road Sant Nagar Burari, New Delhi</p>
                         </div>
                         <div className='text-sm'>
                              <button className='border border-red-800 py-2 px-2 rounded-md text-red-500 ml-2 text-xs'>Change Address</button>
                         </div>
                    </div>

                    <div className='address border p-4 flex flex-column justify-between mt-4'>
                         <div className='text-sm flex items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className=""><g fill="#000" fill-rule="evenodd"><path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path><path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path></g></svg>
                              <p className='font-bold ml-2'>Available Offers</p>
                         </div>
                         <div className='text-xs leading-7 mt-2 text-justify'>
                              {displayedOffers.map((offer, index) => (
                                   <li key={index} className="text-zinc-400"><span>{offer}</span></li>
                              ))}
                              <div className="flex items-center mt-4 cursor-pointer" onClick={toggleShowMore}>
                                   <span className='mr-2 font-bold text-sm text-red-600'>{showMore ? 'Show Less' : 'Show More'}</span>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" className="font-bold" style={{ transform: showMore ? 'rotate(90deg)' : 'rotate(-90deg)' }}>
                                        <path fillRule="evenodd" d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"></path>
                                   </svg>
                              </div>
                         </div>
                    </div>

                    <div className='bag-items mt-4'>
                         {bag.length > 0 ? bag.map((product, index) => (
                              <div key={index} className='border p-4 flex flex-col md:flex-row justify-between items-center mb-4'>
                                   <div className='flex flex-1 items-center '>
                                        <img src={product.images[0]} alt={product.productName} className='w-40 h-40 object-cover mr-4' />
                                        <div className='leading-5'>
                                             <h2 className='text-base mb-2'>{product.brandName}</h2>
                                             <p className='text-base font-semibold mb-2'>{product.productName}</p>
                                             <p className='text-sm text-zinc-400 mb-2'>Sold by : Vision star</p>
                                             <p className='text-sm mb-2'><span className='line-through font-bold'>₹{product.originalPrice}</span>
                                                  <span className='text-zinc-400 ml-2'>₹{product.price}</span>
                                                  <span className='ml-2 text-yellow-500'>{product.discountPercent}% OFF</span></p>
                                             <div className='flex items-center'>
                                                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z" fill="#282C3F"></path></svg>
                                                  <p className='text-xs ml-1'><span className='font-bold'>14 days</span> return available</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div>
                                        <button className='border border-red-500 py-2 px-4 rounded-lg text-red-500' onClick={() => handleRemoveItem(product)}>Remove from Bag</button>
                                   </div>
                              </div>
                         )) : (
                              <div className='border p-4 flex justify-between mt-4'>
                                   <p>Your bag is empty.</p>
                              </div>
                         )}
                    </div>


                    <div className='border p-4 flex justify-between mt-4 cursor-pointer' onClick={handleWishListButton}>
                         <div className='flex item-center'>
                              <TurnedInNot />
                              <p className='ml-2 font-bold underline'>Add More From Wishlist</p>
                         </div>
                         <div>
                              <NavigateNext />
                         </div>
                    </div>
               </div>

               <div className='second-block ml-2 border w-2/5 flex justify-start flex-column p-4'>
                    <div className='font-semibold text-red-500 '>
                         Coupons
                    </div>
                    <div className='border-b mt-4 flex items-center justify-between mr-2'>
                         <div className='flex w-2/5 justify-between items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" class="coupons-base-couponIcon"><g fill="none" fill-rule="evenodd" transform="rotate(45 6.086 5.293)"><path stroke="#000" d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"></path><circle cx="5.35" cy="5.35" r="1.35" fill="#000" fill-rule="nonzero"></circle></g></svg>
                              <h3 className='font-semibold'>Apply Coupons</h3>
                         </div>
                         <div>
                              <button className='text-red-500 border px-4 py-1 rounded-md font-semibold border-red-500 text-sm'>APPLY</button>
                         </div>
                    </div>

                    <div className='border-b mt-4 flex flex-column justify-between mr-2'>
                         <div className=''>
                              <h4 className='text-sm text-red-600 font-bold'>GIFITING & PERSONALISATION</h4>
                         </div>
                         <div className='bg-red-100 rounded-lg my-2 flex justify-between items-center'>
                              <img src={gift} alt='gift' className='h-32 mx-2' />
                              <div className='mr-4'>
                                   <h3 className='text-base mb-1 font-bold'>Buying for a loved one?</h3>
                                   <p className='text-sm mb-1 text-slate-600'>Gift Wrap and personalised message on card, only Rs. 25</p>
                                   <p className='text-normal text-red-500 font-semibold text-sm'>ADD GIFT WRAP</p>
                              </div>
                         </div>
                    </div>

                    <div className='price details border-b border-t mt-4 flex flex-column justify-between mr-2'>
                         <div className='mt-2'>
                              <h3 className='text-sm text-slate-950 font-bold uppercase'>Price Details ({bag.length} Item)</h3>
                         </div>
                         <div className='flex justify-between items-center'>
                              <div className='text-base leading-7 my-4'>
                                   <p>Total MRP</p>
                                   <p>Discount on MRP</p>
                                   <p>Coupon Discount</p>
                                   <p>Platform Fee <span className='text-red-500 font-bold'>Know More</span></p>
                                   <p>Shipping Fee <span className='text-red-500 font-bold'>Know More</span></p>
                              </div>
                              <div className='text-base leading-7 my-4 flex items-start flex-col'>
                                   <p>₹3,349</p>
                                   <p className='text-red-400'>-₹1,700</p>
                                   <p className='text-red-600'>Apply Coupon</p>
                                   <p>20</p>
                                   <p className='text-red-400'>FREE</p>
                              </div>

                         </div>
                    </div>

                    <div className='my-4 flex flex-col' >
                         <div className='flex justify-between items-center text-slate-950 font-bold mr-2'>
                              <h2 className=''>Total Amount</h2>
                              <h2>₹1,719</h2>
                         </div>
                         <div className='w-full bg-red-400 rounded-lg text-center py-4 my-4'>
                              <button className='text-lg text-white font-bold uppercase' onClick={(event) => checkOutHandler(event)}>Buy now with Early Access</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
