import React from 'react';
import About from './About';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <div className='w-full h-auto p-20 flex flex-col justify-center items-center gap-6 bg-light-bg-2'>
        <h1>
            <span className='bg-gradient-to-tr from-custom-pink to-custom-yellow text-5xl font-bold bg-clip-text text-transparent '>
                Welcome to your diary!
            </span>
         </h1>
            <p>Here you can write dreams and gossips and whatever safely. I'll be your secret buddy!</p>
              <button className='px-4 py-2 bg-muted-blue rounded-lg text-white'>Create your account for FREE!</button>
        </div>

        <About />
    
    </>
  )
}

export default Home
