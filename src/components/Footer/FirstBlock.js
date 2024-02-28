import React from 'react';
export default function FirstBlock() {
  return (
    <div>
      <h3 className="text-xs font-bold py-2 uppercase p-1 mb-4">ONLINE SHOPPING</h3>
      <ol className="list-container my-1 text-sm font-normal text-slate-500 pl-1 mt-2 text-md">
        <li className='list-item'>Men</li>
        <li className='list-item'>Women</li>
        <li className='list-item'>Kids</li>
        <li className='list-item'>Home & Living</li>
        <li className='list-item'>Beauty</li>
        <li className='list-item'>Gift Cards</li>
        <li className='list-item'>Myntra Insider</li>
      </ol>
      <h3 className="heading font-bold mt-6 text-md">USEFULL LINKS</h3>
      <ol className="list-container my-1 text-sm font-normal text-slate-500 pl-1 mt-2 text-md">
        <li className='list-item'>Blog</li>
        <li className='list-item'>Careers</li>
        <li className='list-item'>Site Map</li>
        <li className='list-item'>Whitehat</li>
      </ol>
    </div>
  )
}
