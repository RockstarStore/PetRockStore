import React, { Component, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import { Context } from '../Context';

export default function (): JSX.Element {
  // const [userID, setUserID] = useState('default value');
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
