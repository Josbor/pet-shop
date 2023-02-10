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
      <section id='productos-destacados'>
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
        <Image src={doggy} alt='' />
      </section>

      <section id='ultimos productos'>
        <TittleFIeld tittle='ultimos productos' />
        <ProductsSection inverte />
      </section>

      <section>
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

      <FooterHome />
    </>
  );
}

export default HomePage;
