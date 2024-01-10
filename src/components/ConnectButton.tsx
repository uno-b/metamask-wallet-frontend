import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { useGlobalContext } from '../context/useContext';

type PropsType = {
  className?: string;
};

const ConnectButton = ({ className }: PropsType) => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  return (
    <button
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={`flex space-x-4 items-center bg-purple py-2 px-8 rounded-md ${className}`}
    >
      <FaWallet />
      <p className='font-bold'>Connect Wallet</p>
    </button>
  );
};

export default ConnectButton;
