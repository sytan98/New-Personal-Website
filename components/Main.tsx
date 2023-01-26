import * as React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Hi there!
          </p>
          <h1 className='py-4 text-gray-700'>
            I'm <span className='text-[#5651e5]'> Lionel Tan </span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m a Computer Science graduate student with a deep interest in software development and data science.
          </p>
          <div className='flex items-center justify-between max-w-[200px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/si-yu-lionel-tan-28a414105/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/sytan98'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
