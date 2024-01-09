import React, { useState } from 'react';
import { SiVivawallet } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';

import ConnectButton from './ConnectButton';

const Header = () => {
  // TODO: change to useContext
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='bg-secondary'>
      <div className='w-4/5 mx-auto  flex justify-between py-10'>
        <SiVivawallet className='text-4xl' />
        {isLoggedIn ? (
          <>
            <button
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              type='button'
            >
              <FaRegUser className='text-xl' />{' '}
              <svg
                className='w-2.5 h-2.5 ms-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>

            <div
              id='dropdownHover'
              className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
            >
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                <li>
                  <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    Profile
                  </button>
                </li>
                <li>
                  <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <ConnectButton />
        )}
      </div>
    </div>
  );
};

export default Header;
