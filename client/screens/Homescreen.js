import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

function Homescreen() {
  return (
    <>
      <div className='max-w-screen-xl max-h-screen bg-white py-6 px-10 text-textGrey rounded-3xl shadow-navbarShadow'>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Homescreen;
