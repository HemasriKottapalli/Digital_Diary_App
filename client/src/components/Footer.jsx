import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col justify-start items-center gap-4 p-6 bg-muted-blue text-white text-center'>
        <h3 className='text-2xl font-semibold'>Ready to get your personal diary set up? <br /> Start your FREE trial today!</h3>
        <button className='px-4 py-2 rounded-xl bg-dark-coral'>Get Started</button>
        <ul className='flex gap-4'>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
        </ul>
        <p className='mt-4 text-gray-200 font-extralight'>&copy; 2025 Dear Diary Inc. All rights reserved</p>
    </div>
  )
}

export default Footer
