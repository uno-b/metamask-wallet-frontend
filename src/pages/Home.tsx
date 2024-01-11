import React from 'react';
import { Helmet } from 'react-helmet';

import LoggedIn from '../components/HomeStates/LoggedIn';
import LoggedOut from '../components/HomeStates/LoggedOut';
import LoginModal from '../components/Modals/Login';
import { useGlobalContext } from '../context/useContext';

const Home = () => {
  const { isLoggedIn } = useGlobalContext();

  return (
    <>
      <Helmet>
        <title>Wallet</title>
      </Helmet>

      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}

      <LoginModal />
    </>
  );
};

export default Home;
