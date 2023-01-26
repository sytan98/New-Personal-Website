import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I&#39;m currently doing an MEng in Computer Science at Cornell University, where I am taking modules in 
            Machine Learning and Distributed Systems. I am interested in both Data Science and scalable systems 
            and aspire to be a Machine Learning Engineer or a Software Engineer dealing with big data. 
            Prior to this, I did my undergraduate in Electronic and Information Engineering (Computer Engineering) 
            at Imperial College London. 
          </p>
          <p className='py-2 text-gray-600'>
            I love hiking and outdoor activities such as kayaking. I also enjoy playing Badminton, boxing and 
            just gymming in general. I&#39;m also a huge Arsenal fan :)
          </p>
          <Link 
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out my resume to learn more about my experiences.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/../public/asset/about/profile_pic.jpg' className='rounded-xl' alt='/' width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
