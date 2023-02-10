import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Drawer, IconButton, Toolbar } from '@mui/material';
import logo from '../public/assets/logo.svg'
import Image from 'next/image';
import { HomePawIcon, LocationIcon, UserIcon } from '../components/icons';
import MarketCarIcon from '../components/icons/MarketCarIcon';
import SearchField from '../components/fields/SearchField';

export default function HeaderBar() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
    console.log('se acciono')
  }




  return (
    <>

      <AppBar className='block md:!hidden lg:!hidden' position="sticky" sx={{ background: '#FFFEFE ', color: '#68605B', top: '0' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Image className="w-32 ml-12 " src={logo} alt="" />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            background: '#FFFEFE',
            justifyContent: 'center'

          }
        }}
      >

        <Box
          sx={{
            width: 300,
            height: '100vh',
            display: 'grid',
            gridTemplateRows: '1fr 4fr 1fr',
            alignItems: 'center',
            textTransform: 'uppercase',
            justifyContent: 'center',



          }}
        >

          <SearchField />
          <div className='w-full h-[100%] flex flex-col gap-12 justify-center pl-10'>
            <a onClick={toggleDrawer} href="#header">inicio</a>
            <a onClick={toggleDrawer} href="#comprar-por-marca">comprar por marca</a>
            <a onClick={toggleDrawer} href="#comprar-por-mascota">comprar por mascota</a>
            <a onClick={toggleDrawer} href="#nuestros-servicios">nuestros servicios</a>
            <a onClick={toggleDrawer} href="#promociones">promociones</a>
            <a onClick={toggleDrawer} href="#nosotros">nosotros</a>
          </div>
          <div className=' w-full flex justify-center items-center gap-6 ml-auto mr-12'>
            <a href="#">
              <LocationIcon className='scale-[2] w-auto hover:stroke-red-700' />
            </a>
            <a href='#'>
              <HomePawIcon className='scale-[1.8] hover:fill-red-700' />
            </a>
            <a href='#'>
              <UserIcon className=' scale-[2] hover:stroke-red-700' />
            </a>
            <a href='#'>
              <MarketCarIcon className='scale-[1.8] hover:fill-red-700' />
            </a>
          </div>


        </Box>




      </Drawer>






    </>
  );
}
