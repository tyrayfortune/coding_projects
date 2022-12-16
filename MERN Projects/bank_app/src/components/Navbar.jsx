import React from 'react'
import {useState} from 'react'
//
import {close, logo, menu } from "../assets"
//our nav links from constants
import {navLinks} from "../constants"

const Navbar = () => {
  //for mobile menu
const [toggle, setToggle] = useState(false)

  return (
    //all tailwind utility classes. go to tailwind docs 
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      Navbar
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* since instantly returning, use paranthesis not curly brace on inner function */}
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          // logic is if last index margin 0, else margin 10
          className={`font-poppins font-normal cursor-pointer text-
          [16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}
          text-white`}
          >
            {/* go to specific id whenever nav link is clicked */}
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* only shows for mobile because of sm:hidden, were setting up a mobile interface below */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* if toggle is on show close, otherwise show menu */}
        <img src={toggle ? close : menu} alt="menu"
        className='w-[28px h-[28px] object-contain'
        //in REACT you never want to directly modify state, so use function to change thru it
        onClick={() => setToggle((prev) => !prev)}
        />


        {/* mobile navbar */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}> 
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {/* since instantly returning, use paranthesis not curly brace on inner function */}
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              // logic is if last index margin 0, else margin 10
              className={`font-poppins font-normal cursor-pointer text-
              [16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}
              text-white`}
              >
                {/* go to specific id whenever nav link is clicked */}
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar