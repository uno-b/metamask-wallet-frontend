import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='mb-10 text-lg font-bold'>You're logged in!</div>

      <button
        onClick={() => navigate('/profile')}
        className={`flex space-x-4 items-center bg-purple py-2 px-8 rounded-md`}
      >
        <p className='font-bold'>Go to profile</p>
      </button>
    </>
  );
};

export default LoggedIn;
