import React from 'react';
import NavigationBar from './NavigationBar';
import HeaderHouse from './HeaderHome';
import { AvilaIcon } from '../components/icons';
import FooterHome from './FooterHome';
import HeaderBar from './HeaderBar';
import HeaderTop from './HeaderTop';
import Slider from './Slider';


function HomePage() {
  return (
    <>
      <HeaderTop />
      <HeaderHouse />
      {/* navigation-bar */}
      <NavigationBar />
      <HeaderBar />

      <Slider />
      <FooterHome />
    </>
  );
}

export default HomePage;
