import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
