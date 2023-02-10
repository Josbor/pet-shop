import React from 'react'

const TittleFIeld = (
  { description = 'Lorem ipsum dolor sit amet.',
    tittle = 'tittle'
  }) => {
  return (
    <div className='w-full block min-[380px]:px-[7%] px-[8%] min-[320px] sm:px-[5%] mt-10'>
      <p className='text-gray-400'>{description}</p>
      <h3 className='font-bold sm:text-lg uppercase text-red-600'>{tittle}</h3>
    </div>
  )
}

export default TittleFIeld
