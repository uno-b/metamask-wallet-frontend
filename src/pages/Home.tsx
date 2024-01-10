import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import LoggedIn from '../components/HomeStates/LoggedIn';
import LoggedOut from '../components/HomeStates/LoggedOut';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO: Add the logged-in/logged-out states

  return (
    <>
      <Helmet>
        <title>Wallet</title>
      </Helmet>

      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </>
  );
};

export default Home;
