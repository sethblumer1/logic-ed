import React, { useState } from 'react';
import NavBar from './navComps/nav_index';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
