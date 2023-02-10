import React from 'react'
import { CategoryProduct } from '../components'
import { TittleFIeld } from '../components/fields'

const CategorySection = () => {
  const category = [
    'perros',
    'gatos',
    'peces',
    'roedores',
    'reptiles',
    'placeholder'
  ]
  return (
    <section id='comprar-por-mascota' className='mt-10'>
      <TittleFIeld tittle='una gran variedad de categorias' />
      <div className='grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-1 justify-items-center px-2 mt-5'>

        {
          category && category.length > 0 &&
          category.map(c => <CategoryProduct item={c} />)
        }
      </div>
    </section>
  )
}

export default CategorySection

