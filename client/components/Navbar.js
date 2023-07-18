import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-around md:justify-between pt-6 md:px-16 items-center'>
      <a
        href='#'
        className='tracking-widest text-2xl'>
        Quizzy
      </a>
      <div className='flex font-semibold'>
        <ul className='hidden sml:flex p-2 pr-8 text-black border-r-2 sml:gap-6 md:gap-10'>
          <li>
            <a href='#'>Quick test</a>
          </li>
          <li>
            <a href='#'>Start</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
        <button className='ml-8'>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
