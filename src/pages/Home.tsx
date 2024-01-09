import React, { useState } from 'react';
import { SiVivawallet } from 'react-icons/si';
import ConnectButton from '../components/ConnectButton';
import LoginModal from '../components/Modals/Login';

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className='flex flex-col items-center'>
          <SiVivawallet className='text-4xl' />
          <p className='mt-2 italic'>Wallet you can trust</p>
          <ConnectButton
            onClick={() => setIsLoginModalOpen((prev) => !prev)}
            className='mt-10'
          />
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </>
  );
};

export default Home;
