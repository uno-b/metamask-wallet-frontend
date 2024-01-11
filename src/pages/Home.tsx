import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import LoggedIn from '../components/HomeStates/LoggedIn';
import LoggedOut from '../components/HomeStates/LoggedOut';
import LoginModal from '../components/Modals/Login';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
