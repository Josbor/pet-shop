import Image from "next/image";
import SearchField from "../components/fields/SearchField";
import logo from '../public/assets/logo.svg'
import { FacebookIcon, HomePawIcon, InstagramIcon, LocationIcon, TwitterIcon, UserIcon } from "../components/icons";
import MarketCarIcon from "../components/icons/MarketCarIcon";
const HeaderHouse = () => {
  return (
    <header id='header' className="">

      <div className='hidden h-10 bg-[#FFFEFE]  md:grid md:grid-cols-3 md:items-center  my-2'>
        <Image className="w-32 ml-12 " src={logo} alt="" />
        <SearchField />
        <div className='flex items-center gap-2 ml-auto mr-12'>
          <a href="#">
            <LocationIcon className='hover:stroke-red-700' />
          </a>
          <a href='#'>
            <HomePawIcon className='hover:fill-red-700' />
          </a>
          <a href='#'>
            <UserIcon className='hover:stroke-red-700' />
          </a>
          <a href='#'>
            <MarketCarIcon className='hover:fill-red-700' />
          </a>
        </div>
      </div>

    </header>
  )
}

export default HeaderHouse
