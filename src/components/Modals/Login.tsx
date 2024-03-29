import React from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import { useSDK } from '@metamask/sdk-react';
import { FaWallet } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import Overlay from '../UI/Overlay';
import Metamask from '../../images/metamask.webp';
import { useGlobalContext } from '../../context/useContext';
import { setCookie } from '../../utils/functions';
import toast from 'react-hot-toast';

const Login = () => {
  const { isModalOpen, setIsModalOpen, setIsLoggedIn } = useGlobalContext();
  const { sdk } = useSDK();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await sdk?.connect();

      const message = 'Welcome to the space!';

      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      const result = await axios.post(
        `${process.env.REACT_APP_API_URI}/login`,
        {
          address,
          message,
          signature,
        }
      );

      setCookie('token', result.data.token, 1);
      setCookie('id', result.data.user._id, 1);
      setIsLoggedIn(true);
      setIsModalOpen(false);

      toast.success('Signed in');
    } catch (err) {
      console.warn(`failed to connect..`, err);
      toast.error('There was an error');
    }
  };

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

        <button
          onClick={handleLogin}
          className='w-full mt-10 px-4 py-2 bg-white text-black rounded-md flex items-center space-x-4'
        >
          <img src={Metamask} alt='Metamask logo' className='w-6 h-6' />
          <p className='font-semibold'>METAMASK</p>
        </button>
      </div>
    </Overlay>
  );
};

export default Login;
