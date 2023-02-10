import React from 'react'
import headDoggy from '../public/assets/dog.svg'
import Image from 'next/image'
const Service = ({
  tittle = 'tittle',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  image = headDoggy
}) => {
  return (
    <div className='w-72 overflow-hidden'>
      <div className='w-full' >

        <Image className='w-[45%] right-6 relative' src={image} alt='' />
      </div>
      <h6 className=' text-xl capitalize'>{tittle}</h6>
      <div>
        <p className='text-[11px] text-justify'>{description}</p>
      </div>
    </div>
  )
}

export default Service

