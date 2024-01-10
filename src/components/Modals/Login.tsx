import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import Overlay from '../UI/Overlay';
import Metamask from '../../images/metamask.webp';
import { useGlobalContext } from '../../context/useContext';

const Login = () => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  return (
    <Overlay isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className='bg-darkBlue text-white w-[30rem] p-10 rounded-md border-[1px] border-gray-500'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <FaWallet className='text-lg' />
              <p className='font-semibold text-lg'>CONNECT WALLET</p>
            </div>
            <button type='button' onClick={() => setIsModalOpen(!isModalOpen)}>
              <ImCross />
            </button>
          </div>
          <div className='w-full border border-b-1 mt-2' />
        </div>

        <button className='w-full mt-10 px-4 py-2 bg-white text-black rounded-md flex items-center space-x-4'>
          <img src={Metamask} alt='Metamask logo' className='w-6 h-6' />
          <p className='font-semibold'>METAMASK</p>
        </button>
      </div>
    </Overlay>
  );
};

export default Login;
