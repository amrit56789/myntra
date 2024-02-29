import React from 'react'
// import Image from 'next/image'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import googlePlay from "../../assets/social-icons/Google-Play-icon-logo.png"
import apple from "../../assets/social-icons/logo_apple.jpg"
export default function ThirdBlock() {
  return (
    <div className='w-96'>
      <h3 className="text-sm font-bold py-2 uppercase p-1 mb-2">
        Experience Myntra App on Mobile
      </h3>
      <div className='flex'>
        <div className='bg-black px-2 py-1 flex justify-between	items-center rounded-lg mr-2'>
          <div style={{ position: 'relative' }}>
            <img
              src={googlePlay}
              alt="Description of the image"
              layout="fill"
              objectFit="contain"
              className='w-12'
            />
          </div>
          <div className='text-white px-4'>
            <p className='text-xs'>GET IT ON</p>
            <p className='text-sm font-semibold'>Google Play</p>
          </div>
        </div>
        <div className='bg-black px-2 flex justify-between	items-center rounded-lg '>
          <div style={{ position: 'relative' }} className=''>
            <img
              src={apple}
              alt=""
              objectFit="contain"
              className="w-12 text-white"
            />
          </div>
          <div className='text-white px-4'>
            <p className='text-xs'>Download on the</p>
            <p className='text-sm font-semibold'>App Store</p>
          </div>
        </div>
      </div>
      <h3 className="text-sm font-bold py-2 uppercase p-1 mt-2">Keep in Touch</h3>
      <div className="flex text-3xl text-stone-500 py-1">
        <AiFillFacebook className="mr-4" />
        <AiOutlineTwitter className="mr-4" />
        <AiFillInstagram className="mr-4" />
        <AiFillYoutube className="mr-4" />
      </div>
    </div>
  )
}
