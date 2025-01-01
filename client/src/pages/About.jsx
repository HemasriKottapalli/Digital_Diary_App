import React from 'react';
import { FaBookDead } from "react-icons/fa";
import { LuBookLock } from "react-icons/lu";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const features = [
  {
    title: 'Sacryl',
    description: 'Software platform for running your new internet business',
    icon: <FaBookDead />
  },
  {
    title: 'Safe',
    description: 'Software platform for running your new internet business',
    icon: <LuBookLock />
  },
  {
    title: 'Sad?',
    description: 'Software platform for running your new internet business',
    icon: <RiEmotionUnhappyFill />
  },
  {
    title: 'Unlimited',
    description: 'Software platform for running your new internet business',
    icon: <FaPencilAlt />
  }
];

function About() {
  return (
    <div className='w-full h-auto bg-light-bg-1 px-20 py-10'>
      <div className='grid grid-cols-2 gap-10'>
          {/* left */}
        <div className='grid grid-cols-2 pt-5 gap-4 justify-center content-center'>
        {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <div className="mb-4 text-3xl p-3 border border-gray-900 rounded-full">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm font-thin">{feature.description}</p>
            </div>
          ))}
        </div>
          {/* right */}

        <div className='flex flex-col justify-center items-start'>
           <h4 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, facilis!</h4>
           <p className='font-thin pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat perspiciatis laborum ipsa ullam modi dolorem voluptates dignissimos adipisci earum? Quam necessitatibus architecto at doloremque!</p>
           <button className='py-2 px-4 border border-dark-coral text-dark-coral rounded mt-4 hover:bg-dark-coral hover:text-white'>Explore</button>

           <div className='pt-6'>
              <p className='font-thin'>Follow Us</p>
              <div className='flex justify-start items-center gap-3 pt-2'>
                    <div className='p-2 rounded-2xl border border-gray-800 hover:bg-gray-800 hover:text-white'><FaFacebookF /></div>
                    <div className='p-2 rounded-2xl border border-gray-800  hover:bg-gray-800 hover:text-white'><FaInstagram /></div>
                    <div className='p-2 rounded-2xl border border-gray-800  hover:bg-gray-800 hover:text-white'><CiLinkedin /></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About
