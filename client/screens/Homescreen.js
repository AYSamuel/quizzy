import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

function Homescreen() {
  return (
    <>
      <div className='flex flex-col text-textGrey'>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Homescreen;
