import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/assets/navbar/logo.png'

interface ISection {
  name: string,
  link: string
}

const Sections: ISection[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
]
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const menuStyle = "mx-5 uppercase hover:border-b"

  return (
    <div
      style={{ backgroundColor: '#ecf0f3' }}
      className={shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full'>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='50'
            height='50'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            {Sections.map((section, index) => {
              return (
                <li key={index} className={menuStyle}>
                  <Link href={section.link}>{section.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className='flex justify-between items-center w-full'>
            <Image
              src={NavLogo}
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer'
            />
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-y border-gray-300 my-4'>
            <ul>
              {Sections.map((section, index) => {
                return (
                  <Link key={index} href={section.link}>
                    <li className='uppercase hover:border-b py-4'>{section.name}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#5651e5]'>
              Let&#39;s Connect
            </p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <a
                href='https://www.linkedin.com/in/clint-briley-50056920a/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/fireclint'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
