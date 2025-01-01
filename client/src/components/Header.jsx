import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { MdDarkMode } from "react-icons/md";


function Header() {
  return (
      <nav className='flex justify-around items-baseline p-4 rounded-2xl'> 
        <div><span className='bg-gradient-to-tr from-custom-pink to-custom-yellow px-4 py-2 rounded-xl font-[Caveat] font-bold text-white text-xl '>Hema's</span> Diary</div>
        
        <label className='flex justify-center items-baseline'>
            <input type="text" placeholder='Search...' className='peer outline-none text-sm text-gray-700 pr-2'/>
            <AiOutlineSearch className='text-sm text-gray-700'/>
        </label>

        <ul className='flex justify-center items-baseline gap-10'>
          <li>
          <NavLink
            to="/"
            className={({isActive}) =>` ${isActive ? "text-dark-coral pb-2 border-b-2 border-muted-blue" : "text-[#333]"} `}>
              Home
          </NavLink>
          </li>

          <li>
          <NavLink
            to="/about"
            className={({isActive}) =>` ${isActive ? "text-dark-coral pb-2 border-b-2 border-muted-blue" : "text-[#333]"} `}>
              About
          </NavLink>
          </li>

          <li>
          <NavLink
            to="/dashboard"
            className={({isActive}) =>` ${isActive ? "text-dark-coral pb-2 border-b-2 border-muted-blue" : "text-[#333]"} `}>
              Dashboard
          </NavLink>
          </li>
        </ul>

        <div className='flex justify-center items-baseline gap-3'>
            {/* <div className=' p-3 border border-[#333] rounded-3xl text-white text-lg bg-red-700' ><MdDarkMode/></div> */}
            <button className='px-4 py-2 text-sm border border-muted-blue text-muted-blue rounded-3xl hover:bg-muted-blue hover:text-white '>Login</button>        </div>
      </nav>
  ) 
}

export default Header
