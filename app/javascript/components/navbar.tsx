import React from 'react';
import Logo from '../utils/images/png/logo-color.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AccountBox } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <nav className='flex items-center justify-between flex-wrap bg-primary p-2'>
        <div className='flex items-center flex-shrink-0 mr-6 flex-grow-1'>
          <img src={Logo} alt='Focus List' className='fill-current h-14 w-14'/>
        </div>
       {/* This is the hamburger menu button on mobile */}
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white'>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>Menu</svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-lg lg:flex-grow'>
            <a href='/' className='block mt-4 lg:inline-block lg:mt-0 text-gray-50 mr-8'>
              Home
            </a>
            <a href='/about' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
              About
            </a>
          </div>
          <div>
            <AccountBoxIcon className='text-white' />
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar