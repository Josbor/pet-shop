import React from 'react'
import paw from '../public/assets/paw.svg'

import headDog from '../public/assets/dog.svg'
import Image from 'next/image'

const CategoryProduct = ({ item = 'holi' }) => {
  return (
    <div className='w-28 h-32  overflow-hidden'>

      <Image className='w-36 absolute z-10 -translate-x-4' src={headDog} alt='' />
      <Image src={paw} alt='' className='right-3 relative' />
      <h3 className='m-0 p-0 text-center relative bottom-2 capitalize'>{item}</h3>


    </div>
  )
}

export default CategoryProduct

