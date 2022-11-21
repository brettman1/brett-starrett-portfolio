import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-[#0a192f]  shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link href="/" className="flex items-center mb-4 sm:mb-0">       
        <span className="self-center text-2xl font-thin whitespace-nowrap dark:text-white">Brett Starrett</span>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
          <Link to='home' smooth={true} duration={500} className="mr-4 hover:underline md:mr-6 ">Home</Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} href="#skills" className="mr-4 hover:underline md:mr-6">Skills</Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500} href="#work" className="mr-4 hover:underline md:mr-6 ">Work</Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}  className="hover:underline">Contact</Link>
        </li>
      </ul>
    </div>
    
  </footer>
  </div>
  )
}

export default Footer