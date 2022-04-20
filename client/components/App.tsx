import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';

export default function (): JSX.Element {
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

  {
    /* // loginPage() {
  //   console.log('Log in');
  //   fetch('/api/oauth-login');
  // } */
  }
}
