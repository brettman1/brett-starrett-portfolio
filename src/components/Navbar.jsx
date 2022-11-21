import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>

      </div>
      <ul className='hidden md:flex gap-x-8 '>
        <li>
          <Link className='hover:underline' to='home' smooth={true} duration={500}  >
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:underline' to='about' smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li>
          <Link className='hover:underline' to='skills' smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li>
          <Link className='hover:underline' to='work' smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li>
          <Link className='hover:underline' to='contact' smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
     <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'sticky top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:underline'>
          <Link className = 'hover:underline' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:underline'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/in/brett-starrett-7965b5182/'
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              rel='noreferrer'
              target='_blank'
              href='https://github.com/brettman1'
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              rel='noreferrer'
              target='_blank'
              href='mailto: dev.bretts@gmail.com'
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              rel='noreferrer'
              target='_blank'
              href='/public/BrettStarrettResume.PDF'
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
