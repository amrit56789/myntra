import React from 'react';
export default function FirstBlock() {
  return (
    <div className=''>
      <h3 className="text-sm font-bold py-2 text-gray-600 uppercase p-1 mb-2">ONLINE SHOPPING</h3>
      <ol className="list-container my-1 text-sm font-normal text-slate-500 pl-1 mt-2 text-md tracking-wider">
        <li className='list-item text-zinc-400	font-normal mb-1'>Men</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Women</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Kids</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Home & Living</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Beauty</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Gift Cards</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Myntra Insider</li>
      </ol>
      <h3 className="heading font-bold uppercase text-gray-600 mt-6 text-sm">USEFULL LINKS</h3>
      <ol className="list-container my-1 text-sm font-normal text-slate-500 pl-1 mt-2 text-md">
        <li className='list-item text-zinc-400	font-normal mb-1'>Blog</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Careers</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Site Map</li>
        <li className='list-item text-zinc-400	font-normal mb-1'>Whitehat</li>
      </ol>
    </div>
  )
}
