import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

function HomePage() {
  return (
    <div className=" w-screen ">
      <header className="w-full  ">
        <div className="w-full bg-red-600 h-5"></div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default HomePage;
