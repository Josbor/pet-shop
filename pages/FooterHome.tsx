import React from 'react'
import { AvilaIcon, HousePetIcon, TreeIcon } from '../components/icons'

const FooterHome = () => {
  return (
    <footer className='w-full h-80 bg-[#FCFCFC]'>
      <div className='
      grid grid-cols-2 lg:grid-cols-4 gap-4 items-center
      py-16 lg:py-24
      px-6
      :h-[90%]


      '>
        <div className='max-w-[250px]'>
          <h3> Sobre nosotros</h3>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</p>
        </div>
        <div>
          <h3> Sobre nosotros</h3>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</p>
        </div>
        <div>
          <h3> Sobre nosotros</h3>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</p>
        </div>
        <div>
          <h3> Sobre nosotros</h3>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</p>
        </div>
      </div>
      <HousePetIcon className='
      block absolute left-20 translate-y-[-2.5rem]
      fill-red-600'
      />
      <TreeIcon className='
      block absolute right-20 translate-y-[-3.25rem]
      fill-red-600' />
      <div className='w-full py-4 bg-red-600 flex items-center justify-center  absolute box-border' >
        <div className='
        grid grid-cols-[5fr,1fr]
        md:flex justify-center items-center gap-2
        text-[#FEFEFE] text-[10px]
        md:text-sm
        px-3'
        >
          <p className='ml-auto pl-8'>
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por Avila Tek
          </p>
          <AvilaIcon className='mr-auto' />
        </div>
      </div>
    </footer>
  )
}

export default FooterHome
