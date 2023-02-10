import React from 'react'
import MarketCarIcon from './icons/MarketCarIcon'
import Image from 'next/image'
import puppyChoit from '../public/assets/puppy-chiot.png'
import { Paw2 } from './icons'

const Product = ({ tittle = '1st choice puppy choit', image = puppyChoit }) => {

  return (
    <div className='w-44 box-border'>
      <div className='w-full h-32' style={{ backgroundImage: `url(${image.src})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

      </div>
      <div className='pl-3'>
        <h6 className='text-sm capitalize'>{tittle}</h6>
        <div className=' flex'>
          <Paw2 className=' w-5 h-5 fill-[#B5B0AD]' />
          <Paw2 className=' w-5 h-5  fill-[#B5B0AD] ' />
          <Paw2 className=' w-5 h-5  fill-[#B5B0AD]' />
          <Paw2 className=' w-5 h-5  fill-none   stroke-[#DAD6D3]' stroke-width={0.60} />
          <Paw2 className=' w-5 h-5  fill-none  stroke-[#DAD6D3]' stroke-width={0.60} />
        </div>
        <p className='text-[#5F5F5F]'>$9.99</p>
      </div>
      <div className=' w-full flex justify-center'>
        <button className=' bg-red-600 flex gap-1 w-28 h-6 items-center justify-center rounded-[6px]'>
          <MarketCarIcon className='h-3 fill-gray-100 stroke-0' />
          <p className='capitalize text-gray-100 text-xs'>agregar</p>
        </button>
      </div>
    </div>
  )
}

export default Product

