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
import Login from './components/Login';
import { useState } from 'react';
import { Context } from './Context';
import store from './store';

// use useContext instead grab context from Login
// const [ loggedIn ] = useState('');
// document.getElementById('client_id').content = process.env.CLIENT_ID;
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductGrid />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
