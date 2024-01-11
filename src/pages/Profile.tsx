import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

import Input from '../components/UI/Input';
import { getCookie, validateEmail } from '../utils/functions';

const Profile = () => {
  const [emailNew, setEmailNew] = useState('');
  const [phoneNew, setPhoneNew] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URI}/users/${getCookie('id')}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`,
          },
        }
      );

      const { phoneNumber, email } = result.data.data.user;
      phoneNumber && setPhoneNew(phoneNumber);
      email && setEmailNew(email);
    })();
  }, []);

  useEffect(() => {
    validateEmail(emailNew) ? setIsEmailValid(true) : setIsEmailValid(false);

    if (phoneNew.length === 8 && parseInt(phoneNew)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }, [emailNew, phoneNew]);

  const handleChange = async (e: any) => {
    e.preventDefault();

    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URI}/users/${getCookie('id')}`,
        {
          phoneNumber: phoneNew ? phoneNew : undefined,
          email: emailNew ? emailNew : undefined,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`,
          },
        }
      );

      toast.success('Successfully changed');
    } catch (error) {
      toast.error('There was an error updating');
    }
  };

  return (
    <>
      <Helmet>
        <title>Wallet | User Profile</title>
      </Helmet>

      <h1 className='text-2xl font-bold mb-10'>Change Profile</h1>

      <form className='flex flex-col space-y-4 w-96'>
        <Input
          placeholder='Email'
          value={emailNew}
          onChange={(e: any) => setEmailNew(e.target.value)}
        />
        <Input
          placeholder='Phone'
          value={phoneNew}
          onChange={(e: any) => setPhoneNew(e.target.value)}
        />
        <button
          onClick={handleChange}
          disabled={!isEmailValid || !isPhoneValid}
          className='bg-purple py-2 px-8 rounded-md'
        >
          Change settings
        </button>
      </form>
    </>
  );
};

export default Profile;
