import React from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className='w-screen h-screen bg-primary text-white'>
        <Header />
        <div className='mx-auto w-4/5 my-10'>{children}</div>
        <Footer />
      </div>

      <Toaster />
    </>
  );
};

export default Layout;
