import React from 'react'

const NavigationBar = () => {
  return (
    <nav className='hidden md:flex bg-white w-full  justify-between px-40 text-gray-500 py-2
      !sticky !top-[0]  shadow-md text-[10px] lg:text-lg z-50'>

      <a className="hover:text-red-700" href="#header">inicio</a>
      <a className="hover:text-red-700" href="#comprar-por-marca">comprar por marca</a>
      <a className="hover:text-red-700" href="#comprar-por-mascota">comprar por mascota</a>
      <a className="hover:text-red-700" href="#nuestros-servicios">nuestros servicios</a>
      <a className="hover:text-red-700" href="#promociones">promociones</a>
      <a className="hover:text-red-700" href="#nosotros">nosotros</a>

    </nav>

  )
}

export default NavigationBar
