import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import Overlay from '../UI/Overlay';
import Metamask from '../../images/metamask.webp';

type PropsType = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const Login = ({ isOpen, setIsOpen }: PropsType) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='bg-darkBlue text-white w-[30rem] p-10 rounded-md border-[1px] border-gray-500'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <FaWallet className='text-lg' />
              <p className='font-semibold text-lg'>CONNECT WALLET</p>
            </div>
            <button type='button' onClick={() => setIsOpen(!isOpen)}>
              <ImCross />
            </button>
          </div>
          <div className='w-full border border-b-1 mt-2' />
        </div>

        <button className='w-full mt-4 px-4 py-2 bg-lightBlue text-black rounded-md flex items-center space-x-4'>
          <img src={Metamask} alt='Metamask logo' className='w-6 h-6' />
          <p className='font-semibold'>METAMASK</p>
        </button>
      </div>
    </Overlay>
  );
};

export default Login;
