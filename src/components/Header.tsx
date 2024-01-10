import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiVivawallet } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';

import ConnectButton from './ConnectButton';

const Header = () => {
  // TODO: change to useContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    // TODO
  };

  return (
    <div className='bg-secondary'>
      <div className='w-4/5 mx-auto  flex justify-between py-10'>
        <Link to='/'>
          <SiVivawallet className='text-4xl' />
        </Link>

        {isLoggedIn ? (
          <div className='relative group'>
            <button
              className='text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
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
              className={`absolute top-10 left-0 z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
            >
              <ul className='py-2 text-sm text-gray-700'>
                <li>
                  <Link
                    to='/profile'
                    className='block px-4 py-2 hover:bg-gray-100 w-full '
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className='block px-4 py-2 hover:bg-gray-100 w-full text-start'
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ConnectButton />
        )}
      </div>
    </div>
  );
};

export default Header;
