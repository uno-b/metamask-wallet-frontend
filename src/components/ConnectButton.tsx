import React from 'react';
import { FaWallet } from 'react-icons/fa';

type PropsType = {
  onClick?: () => void;
  className?: string;
};

const ConnectButton = ({ onClick, className }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`flex space-x-4 items-center bg-purple py-2 px-8 rounded-md ${className}`}
    >
      <FaWallet />
      <p className='font-bold'>Connect Wallet</p>
    </button>
  );
};

export default ConnectButton;
