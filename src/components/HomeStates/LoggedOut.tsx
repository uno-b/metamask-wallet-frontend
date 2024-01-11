import React from 'react';
import { SiVivawallet } from 'react-icons/si';

import ConnectButton from '../ConnectButton';

const LoggedOut = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <SiVivawallet className='text-4xl' />
        <p className='mt-2 italic'>Wallet you can trust</p>
        <ConnectButton className='mt-10' />
      </div>
    </div>
  );
};

export default LoggedOut;
