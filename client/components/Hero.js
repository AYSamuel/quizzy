import React from 'react';
import Image from 'next/image';
import Buttons from './Buttons';
import heroImg from '../public/assets/images/Wavy_Bus-22_Single-03.jpg';

function Hero() {
  return (
    <div className='py-5 flex items-center gap-2'>
      <div className='w-1/2 max-w-3xl flex flex-col items-start gap-4 lg:gap-10 lgl:gap-12'>
        <h2 className='font-bold text-black sml:text-lg mdl:text-4xl'>
          The JavaScript Multiple Choice Quiz for Programmers!
        </h2>
        <p className='text-textDark text-sm sml:text-base'>
          From fundamentals to advanced concepts, put your expertise to the test. Unlock new levels of JavaScript
          proficiency!
        </p>
        <div className='flex flex-col sml:flex-row gap-2'>
          <Buttons
            title='Random Test'
            bgColor='bg-primary'
            textColor='text-white'
          />
          <Buttons
            title='Register'
            textColor='text-textDark'
          />
        </div>
      </div>
      <div className='w-1/2 max-w-xl'>
        <Image
          src={heroImg}
          alt='study-image'
        />
      </div>
    </div>
  );
}

export default Hero;
