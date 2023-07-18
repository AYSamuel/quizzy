import React from 'react';
import Image from 'next/image';
import Buttons from './Buttons';
import heroImg from '../public/assets/images/Wavy_Bus-22_Single-03.jpg';

function Hero() {
  return (
    // <div className='flex flex-col-reverse px-3 mdl:flex-row items-center justify-center gap-2 py-4'>
    //   <div className=' flex flex-col items-start p-8 gap-4 lg:gap-10 lgl:gap-12 '>
    //     <h2 className='font-bold text-primary sml:text-lg mdl:text-4xl'>
    //       JavaScript Multiple-choice Quiz for Programmers!
    //     </h2>
    //     <p className='text-textDark text-sm sml:text-base'>
    //       From fundamentals to advanced concepts, put your expertise to the test. Unlock new levels of JavaScript
    //       proficiency!
    //     </p>
    //     <div className='flex gap-2'>
    //       <Buttons
    //         title='Random Test'
    //         color='bg-primary'
    //         textColor='text-white'
    //         hoverEfx='hover:bg-secondary'
    //         weight='font-medium'
    //       />
    //       <Buttons
    //         title='Register'
    //         textColor='text-textDark'
    //         active='active:text-white'
    //         weight='font-medium'
    //       />
    //     </div>
    //   </div>
    //   <div className=''>
    //     <Image
    //       src={heroImg}
    //       alt='study-image'
    //     />
    //   </div>
    // </div>
    <div className='flex flex-col-reverse mt-5 mdl:flex-row items-center gap-2 mdl:gap-10 mx-5 mdl:mx-10'>
      <div className='px-5 py-8'>
        <h2 className='font-bold text-primary sml:text-lg md:text-4xl'>
          JavaScript Multiple-choice Quiz for Programmers!
        </h2>
        <p className='text-textDark text-sm sml:text-base mt-4 mb-10'>
          From fundamentals to advanced concepts, put your expertise to the test. Unlock new levels of JavaScript
          proficiency!
        </p>
        <div className='flex gap-2'>
          <Buttons
            title='Random Test'
            color='bg-primary'
            textColor='text-white'
            hoverEfx='hover:bg-secondary'
            weight='font-medium'
          />
          <Buttons
            title='Register'
            textColor='text-textDark'
            active='active:text-white'
            weight='font-medium'
          />
        </div>
      </div>
      <div className='max-w-md lg:max-w-xl'>
        <Image
          src={heroImg}
          alt='hero-img'
        />
      </div>
    </div>
  );
}

export default Hero;
