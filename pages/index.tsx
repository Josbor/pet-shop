import React, { useId } from 'react';
import NavigationBar from './NavigationBar';
import HeaderHouse from './HeaderHome';
import FooterHome from './FooterHome';
import HeaderBar from './HeaderBar';
import HeaderTop from './HeaderTop';
import Slider from './Slider';
import { CategoryProduct, Product, Service } from '../components';
import CategorySection from './CategorySection';
import ProductsSection from './ProductsSection';
import { TittleFIeld } from '../components/fields';
import Image from 'next/image';
import dogEating from '../public/assets/dog-eating.jpg'
import foodDog from '../public/assets/dog-food.jpg'
import doggy from '../public/assets/doggy.png'
import mark from '../public/assets/mark.png'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/icons';



const services = [
  'peluqueria',
  'odontologia',
  'veterinario',
  'entrenamiento',
  'psicologia canina',
  'fiestas de cumpleaños',

]
function HomePage() {
  return (
    <>
      <HeaderTop />
      <HeaderHouse />
      {/* navigation-bar */}
      <NavigationBar />
      <HeaderBar />
      <Slider />
      <CategorySection />
      <section id='promocionespromociones'>
        <TittleFIeld tittle='productos destacados' />
        <ProductsSection />
      </section>

      <section>
        <div
          className='w-full grid grid-cols-2 justify-center my-10 px-[7%] sm:px-20 '
        >
          <Image className='w-full' src={dogEating} style={{ objectFit: 'fill' }} alt='' />
          <Image className='w-full' src={foodDog} style={{ objectFit: 'fill' }} alt='' />
        </div>
      </section>

      <section>
        <TittleFIeld tittle='productos populares' />
        <div className='w-full grid md:gap-10 lg:gap-28 justify-items-center px-4 gap-y-8  sm:px-[8%] my-10' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
          <Product key={useId()} />
          <Product key={useId()} />
          <Product key={useId()} />
          <Product key={useId()} />
          <Product key={useId()} />
        </div>
      </section>

      <section className='px-[7%]'>
        <Image className='w-full' src={doggy} alt='' />
      </section>

      <section id='ultimos-productos'>
        <TittleFIeld tittle='ultimos productos' />
        <ProductsSection inverte />
      </section>

      <section id='nuestros-servicios'>
        <TittleFIeld tittle='nuestros servicios' />
        <p></p>
        <div className='w-full grid gap-y-5 lg:grid-cols-3 px-[7%] my-10' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))' }}>
          {services.length > 0 &&
            services.map(s => (
              <Service key={useId()} tittle={s} />
            ))
          }
        </div>
      </section>

      <section id='comprar-por-marca' className='w-full'>
        <TittleFIeld tittle='trabajamos con las mejores marcas' />
        <div className='   sm:grid  sm:grid-cols-[1.75fr,4fr] px-[7%]  my-5 sm:my-10'>
          <div className='w-full'>
            <p className='w-full text-[#333333] text-xs text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.
            </p>
          </div>
          <div className=' w-full grid gap-y-8 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-10 sm:mt-0' >
            <Image src={mark} alt='' />
            <Image src={mark} alt='' />
            <Image src={mark} alt='' />
            <Image src={mark} alt='' />

          </div>
          <div className='flex gap-2'>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <TwitterIcon className='fill-white' />
            </a>
            <a href="#">
              <FacebookIcon className='fill-white' />
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}

export default HomePage;
