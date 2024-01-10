import React, { useState } from 'react';
import { SiVivawallet } from 'react-icons/si';

import ConnectButton from '../ConnectButton';
import LoginModal from '../Modals/Login';

const LoggedOut = () => {
  // TODO: Check if first time
  // TODO: Show welcome message + personal information

  return (
    <>
      <div>
        <div className='flex flex-col items-center'>
          <SiVivawallet className='text-4xl' />
          <p className='mt-2 italic'>Wallet you can trust</p>
          <ConnectButton className='mt-10' />
        </div>
      </div>

      <LoginModal />
    </>
  );
};

export default LoggedOut;
