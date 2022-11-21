import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import blueWhite from '../assets/blueWhite.jpg';
import { Link } from "react-scroll"; 



const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#500]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
        I'm Brett 
        <br />
         a Full Stack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md text-lg">
        My name is Brett Starrett. I am a Software Engineer from Houston, Texas. I've worked using different technologies, both backend and frontend. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
        
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#0a192f]  cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={blueWhite}  
          alt="my profile"
          className="rounded-2xl mx-auto  w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;