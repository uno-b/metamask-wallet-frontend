import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/UI/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
