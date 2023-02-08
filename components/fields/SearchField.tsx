import React from 'react'
import { SearchIcon } from '../icons'

const SearchField = () => {
  return (
    <div className=' w-[80%] h-12 md:w-5/6 md:h-8 grid   mx-auto grid-cols-[4fr,30px] place-content-center box-border border border-gray-400 justify-end rounded-md '>
      <input
        className='
              w-full
              border-none
              focus:ring-transparent
              active:outline-none
              h-6
              placeholder-gray-400'
        type="text"
        placeholder='Buscador'
      />
      <a className=' w-8 flex justify-end box-border ml-auto pr-2' href="#">
        <SearchIcon height={20} width={25} className="fill-slate-300 hover:fill-slate-500" />
      </a>
    </div>
  )
}

export default SearchField
