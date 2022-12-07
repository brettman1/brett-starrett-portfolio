import React from 'react';
import code from '../assets/700.png';
import coverLetter from '../assets/cl.png'
import vista from '../assets/BvBrandBrownNoBG.png'

const Works = () => {
  return (
    <div id='work' className='w-full md:h-screen text-gray-300 bg-[#500]'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#0a192f]'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container object-contain rounded-md flex justify-between max-w-full mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' bg-[#0a192f] text-lg font-bold text-white tracking-wider'>
                    Trill Art Factory
              </span>
              <p className='ml-9'>An E-Commerce store built with Bootsrap</p>
              <div className='pt-8 text-center'>
                <a  target='_blank' rel='noreferrer' href='https://github.com/brettman1/ecommerce-taf'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${coverLetter})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Cover Letter Generator
              </span>
              <p className='text-center'>Built with React and GPT-3</p>
              <div className='pt-8 text-center'>
                <a target='_blank' rel='noreferrer' href='https://create-cover-letter-g1afdbsar-brettman1.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${vista})` }}
            className='bg-[#000] shadow-lg shadow-[#040c16] group container rounded-md flex mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Buena Vista Safari
              </span>
              <p className='text-center ml-6'>A safari tour webpage HTML, CSS & Javascript</p>
              <div className='pt-8 text-center'>
                <a target='_blank' rel='noreferrer' href='https://github.com/brettman1/brett-starrett-portfolio'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
