import React from 'react'
// import Image from 'next/image'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import googlePlay from "../../assets/social-icons/Google-Play-icon-logo.png"
import apple from "../../assets/social-icons/logo_apple.jpg"
export default function ThirdBlock() {
  return (
    <div className='social-details'>
      <div>
        <h3 className="text-sm font-bold py-2 text-gray-600 uppercase p-1 mb-2">
          Experience Myntra App on Mobile
        </h3>
        <div className='flex social-icons w-full'>
          <div className=' bg-black flex items-center rounded-lg mr-1 social-img'>
            <div style={{ position: 'relative' }} className='px-2 py-1'>
              <img
                src={googlePlay}
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
                className='w-10 icon'
              />
            </div>
            <div className='text-white'>
              <p className='text-xs'>GET IT ON</p>
              <p className='text-sm font-semibold mr-2'>Google Play</p>
            </div>
          </div>
          <div className='bg-black px-2 flex	items-center rounded-lg social-img'>
            <div style={{ position: 'relative' }} className='py-1'>
              <img
                src={apple}
                alt=""
                objectFit="contain"
                className="w-10 icon"
              />
            </div>
            <div className='text-white'>
              <p className='text-xs ml-1'>Download on the</p>
              <p className='text-sm font-semibold ml-1'>App Store</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold py-2 uppercase p-1 mt-2">Keep in Touch</h3>
        <div className="flex text-3xl text-stone-500 py-1">
          <AiFillFacebook className="mr-4" />
          <AiOutlineTwitter className="mr-4" />
          <AiFillInstagram className="mr-4" />
          <AiFillYoutube className="mr-4" />
        </div>
      </div>
    </div>

  )
}
