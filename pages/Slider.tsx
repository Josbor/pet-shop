import Image from 'next/image'
import React, { useRef } from 'react'
import slide1 from '../public/assets/slide1.png'

const Slider = () => {
  const slideShow = useRef(null)
  const nextSlide = () => {
    if (slideShow.current.children.length > 0) {
      //we get the first element from slideShow
      const firstElement = slideShow.current.children[0];

      // make it the config for the transition
      slideShow.current.style.transition = '1000ms ease-out all'
      const sizeSlide=slideShow.current.children
    }
  }
  return (
    <>
      <div className='w-screen overflow-hidden'>
        <div ref={slideShow} className='flex flex-row flex-nowrap box-border w-[300%]'>
          <div className=''>
            <Image
              className='w-screen'
              src={slide1}
              alt=''
            />
          </div>
          <div>
            <Image
              className='w-screen'
              src={slide1}
              alt=''
            />
          </div>
          <div>
            <Image
              className='w-screen'
              src={slide1}
              alt=''
            />
          </div>

        </div>

      </div>
      <button onClick={nextSlide}>
        siguiente
      </button>
    </>
  )
}

export default Slider
