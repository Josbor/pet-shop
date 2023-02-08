import React from 'react'
import FacebookIcon from '../components/icons/FacebookIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import LocationIcon from '../components/icons/LocationIcon'
import TwitterIcon from '../components/icons/TwitterIcon'

const HeaderTop = () => {
  return (
    <div className="w-full bg-red-600 h-6 !box-border flex items-center gap-1">
      <div className='flex gap-3 ml-auto mr-10'>

        <div className='flex gap-1'>
          <LocationIcon stroke='white' />
          <select
            className="
              bg-transparent
              border-none
              h-full w-auto
              focus:ring-0
              text-white
              text-xs
              capitalize
              p-0
              pr-5
              place-content-center
              "

            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPositionX: 'right'

            }}
          >
            <option className='' value="bello-Monte">bello monte</option>
          </select>
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
    </div>
  )
}

export default HeaderTop
