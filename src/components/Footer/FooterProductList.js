import React from 'react'

export default function FooterProductList() {

  const categories = [
    'Makeup', 'Dresses', 'For Girls', 'T-Shirts', 'Sandals', 'Headphones',
    'Babydolls', 'Blazers', 'For Men', 'Handbags', 'Ladies Watches', 'Bags',
    'Sport Shoes', 'Reebok Shoes', 'Puma Shoes', 'Boxers', 'Wallets', 'Tops',
    'Earrings', 'Fastrack Watches', 'Kurtis', 'Nike', 'Smart Watches', 'Titan Watches',
    'Designer Blouse', 'Gowns', 'Rings', 'Cricket Shoes', 'Forever 21', 'Eye Makeup',
    'Photo Frames', 'Punjabi Suits', 'Bikini', 'Myntra Fashion Show', 'Lipstick', 'Saree',
    'Watches', 'Dresses', 'Lehenga', 'Nike Shoes', 'Goggles', 'Bras', 'Suit', 'Chinos',
    'Shoes', 'Adidas Shoes', 'Woodland Shoes', 'Jewellery', 'Designers Sarees'
  ];

  return (
    <div className="md:px-28 max-sm:px-10">
      <h3 className="text-xs font-bold uppercase py-2 p-1">
        popular searches
      </h3>
      <p className="text-sm text-slate-500 font-light p-1 uppercase leading-relaxed">
        {categories.map((category, index) => (
          <span key={index} className="mr-2">
            {category}{index < categories.length - 1 ? ' | ' : ''}
          </span>
        ))}
      </p>
      <div className='flex justify-between mt-8 mb-2 text-slate-400 '>
        <p>In case of any concern, <span className='text-blue-500 font-bold'>Contact Us</span></p>
        <p>© {new Date().getFullYear()} www.myntra.com. All rights reserved.</p>
        <p>A Flipkart company</p>
      </div>
    </div>
  )
}
