import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Input from '../components/UI/Input';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //TODO: Fetch original values
  const [emailNew, setEmailNew] = useState('');
  const [phoneNew, setPhoneNew] = useState('');

  return (
    <>
      <Helmet>
        <title>Wallet | User Profile</title>
      </Helmet>

      <h1 className='text-2xl font-bold mb-10'>Change Profile</h1>

      <form className='flex flex-col space-y-4'>
        <Input
          placeholder=''
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          placeholder=''
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}
        />
        <button className='bg-purple py-2 px-8 rounded-md'>
          Change settings
        </button>
      </form>
    </>
  );
};

export default Profile;
