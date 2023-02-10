import React, { useId } from 'react'
import { Product } from '../components'
import catAd from '../public/assets/catAd.png'
import Image from 'next/image'


const ProductsSection = ({ inverte = false }) => {
  console.log(catAd.width)
  return (
    <section id='productos-destacados' className={` w-full h-auto grid grid-rows-[8rem,auto] sm:grid-rows-1 ${inverte ? 'sm:grid-cols-[70%,30%]' : 'sm:grid-cols-[30%,70%]'} justify-items-center grid-flow-col-dense  px-[5%] mt-10 box-border`} >

      <Image className={`bg-no-repeat h-28 sm:h-full bg-cover ${inverte ? 'sm:order-last' : ''}`} src={catAd} alt='' style={{ objectFit: 'cover' }} />
      <div className=' w-full grid grid-cols-2 sm:grid-cols-3 items-center  gap-y-12 justify-items-center'>
        <Product key={useId()} />
        <Product key={useId()} />
        <Product key={useId()} />
        <Product key={useId()} />
        <Product key={useId()} />
        <Product key={useId()} />
      </div>

    </section>
  )
}

export default ProductsSection

