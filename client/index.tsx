/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #root in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Profile from './components/Profile';
import store from './store';
// import GoogleLoginHook from '';
// import GoogleLogoutHook from '';

render(
  /*if not logged in, render this */
  /* <GoogleLoginHook />
  <GoogleLogoutHook /> */
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductGrid />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
