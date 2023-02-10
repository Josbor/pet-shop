import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import slide1 from '../public/assets/slide1.png'
import slide2 from '../public/assets/slide2.png'
import slide3 from '../public/assets/slide3.png'

import { MinusIcon } from '../components/icons'
import { useInterval } from '../hooks'

const sliders = [
  {
    id: 1,
    url: slide1
  },
  {
    id: 2,
    url: slide2
  },
  {
    id: 3,
    url: slide3
  },
]
const Slider = () => {
  const [a, seta] = useState(0)
  const [b, setB] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  useInterval(() => {
    nextSlide()
  }, 5000)
  const slideShow = useRef(null)




  const previousSlide = (value?) => {


    if (slideShow.current.children.length > 0) {

      //we get the first element from slideShow
      const firstElement = slideShow.current.firstChild;
      const lastElement = slideShow.current.children[1];

      if (typeof value == 'number') {
        if (firstElement.id == 'a') {
          setB(value)
          seta(value < 2 ? value + 1 : 0)
          setCurrentSlide(value)
        }
        if (firstElement.id == 'b') {
          seta(value)
          setB(value < 2 ? value + 1 : 0)
          setCurrentSlide(value)
        }
      }
      if (typeof value !== 'number') {
        if (firstElement.id == 'a') {
          setB(a > 0 ? a - 1 : 2)
          setCurrentSlide(a > 0 ? a - 1 : 2)
        }
        if (firstElement.id == 'b') {
          seta(b > 0 ? b - 1 : 2)
          setCurrentSlide(b > 0 ? b - 1 : 2)
        }
      }
      console.log({ firstElement, lastElement })
      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild)

      slideShow.current.style.transition = 'none';
      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

      setTimeout(() => {
        slideShow.current.style.transform = `translateX(0)`;
        slideShow.current.style.transition = '1000ms ease-out all';


      }, 30);
      //TRANSITION FUNCTION

    }


  }



  const nextSlide = (value?) => {
    console.log(typeof value)
    if (slideShow.current.children.length > 0) {
      //we get the first element from slideShow
      const firstElement = slideShow.current.children[0];


      if (value && typeof value == 'number') {
        const lastElement = slideShow.current.children[1];
        console.log(lastElement)
        if (lastElement.id == 'a') {
          console.log('entre')
          seta(value)
          setCurrentSlide(value)
        }
        if (lastElement.id == 'b') {
          setB(value)
          setCurrentSlide(value)
        }

      } else {
        setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
      }
      // make it the config for the transition
      slideShow.current.style.transition = '1000ms ease-out all'
      const sizeSlide = slideShow.current.children[0].offsetWidth;

      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`
      const transition = () => {

        //reset the slide position
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = 'translateX(0)';

        // take us the first element and send it to the end
        slideShow.current.appendChild(firstElement);
        slideShow.current.removeEventListener('transitionend', transition)

        if (value && typeof value == 'number') {
          if (firstElement.id == 'a') {
            seta(value < 2 ? value + 1 : 0)

          }
          if (firstElement.id == 'b') {
            setB(value < 2 ? value + 1 : 0)

          }
        }

        if (typeof value !== 'number') {
          if (firstElement.id == 'a') {

            seta(b < 2 ? b + 1 : 0)
          }
          if (firstElement.id == 'b') {

            setB(a < 2 ? a + 1 : 0)
          }
        }
      }
      slideShow.current.addEventListener('transitionend', transition)
    }
  }
  return (
    <>
      <div className='w-full max-h-[235px] sm:max-h-[450px]  overflow-hidden -z-10'>
        <div ref={slideShow} className='flex flex-row h-full flex-nowrap box-border w-[200%]'>
          <div id='a' className=''>
            <Image
              className='w-screen object-fill '

              src={sliders[a].url}
              alt={`${a}`}
            />
          </div>
          <div id='b' className=''>
            <Image
              className='w-screen   object-fill'

              src={sliders[b].url}
              alt={`${b}`}
            />
          </div>




        </div>

      </div>

      <div className=" sm:w-[100px] flex gap-1 absolute translate-x-[40vw] sm:translate-x-[45vw] -translate-y-12 sm:-translate-y-20">
        <button onClick={() => currentSlide != 0 ? previousSlide(0) : null} name='slide1'>
          <MinusIcon className={`${currentSlide == 0 ? 'fill-red-700' : ''} w-5 sm:w-10 `} />
        </button>
        <button onClick={currentSlide > 1 ? previousSlide : nextSlide} name='slide2'>
          <MinusIcon className={`${currentSlide == 1 ? 'fill-red-700' : ''} w-5 sm:w-10`} />
        </button>
        <button onClick={() => currentSlide !== 2 ? nextSlide(2) : null} name='slide3'>
          <MinusIcon className={`${currentSlide == 2 ? 'fill-red-700' : ''} w-5 sm:w-10`} />
        </button>

      </div>



    </>
  )
}

export default Slider
