import React from 'react'
import { AvilaIcon, FacebookIcon, HousePetIcon, InstagramIcon, TreeIcon, TwitterIcon } from '../components/icons'

const FooterHome = () => {
  return (
    <footer id='nosotros' className='w-full  bg-[#FCFCFC]  ' >
      <div className='
      grid grid-cols-2 lg:grid-cols-4 gap-4 items-start lg:justify-items-center justify-items-start
      py-14
      ml-[8%]
      md:ml-[10%]
      lg:ml-0
      sm:px-6
      h-auto


      '>
        <div className='max-w-[250px]'>
          <h3 className='text-lg text-[#E2081E] mb-4'> Sobre nosotros</h3>
          <p className='text-xs text-[#867D77] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</p>
        </div>
        <div>
          <h3 className='text-lg text-[#E2081E] mb-4'>Mi cuenta</h3>
          <ul className='text-xs flex flex-col gap-3 mt-2 text-[#867D77] '>
            <li><a href='#'>Información personal</a></li>
            <li><a href='#'>Direcciones</a></li>
            <li><a href='#'>Mascotas</a></li>
            <li><a href='#'>Órdenes</a></li>
            <li><a href='#'>Agenda</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg text-[#E2081E] mb-4'>Información</h3>
          <ul className='text-xs flex flex-col gap-3 mt-2 text-[#867D77]  '>

            <li><a href='#'>Formulario de contacto</a></li>
            <li><a href='#'>Preguntas frecuentes</a></li>
            <li><a href='#'>Términos y condiciones</a></li>
            <li><a href='#'>Política de privacidad</a></li>

          </ul>
        </div>
        <div>
          <h3 className='text-lg text-[#E2081E] mb-4' >Atención al cliente</h3>
          <ul className='text-xs flex flex-col gap-3 mt-2 text-[#867D77]  '>
            <li><a href='#'>Bello Monte, calle XXXX, local 1</a></li>
            <li><a href='#'>(0212) 575 54 12</a></li>
            <li><a href='#'>soporte@maxipet.com</a></li>
            <li><a href='#'>Lunes a Viernes</a></li>
            <li><a href='#'>9:00 a.m. - 5:00 p.m.</a></li>
          </ul>
          <div className='flex gap-2 mt-2'>
            <a href="#">
              <InstagramIcon className='fill-[#867D77]' />
            </a>
            <a href="#">
              <TwitterIcon className='fill-[#867D77]' />
            </a>
            <a href="#">
              <FacebookIcon className='fill-[#867D77]' />
            </a>
          </div>
        </div>
      </div>
      <HousePetIcon className='
      block absolute left-20 translate-y-[-2.5rem]
      fill-red-600'
      />
      <TreeIcon className='
      block absolute right-20 translate-y-[-3.25rem]
      fill-red-600' />
      <div className='w-full h-16 bg-red-600 flex items-center justify-center absolute   box-border' >
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
    </footer >
  )
}

export default FooterHome
