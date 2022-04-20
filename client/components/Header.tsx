import React from 'react';
import { NavLink } from 'react-router-dom';

export default function (): JSX.Element {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <NavLink className="brand-logo center" to="">
            RockStar &#129704;&#11088;
          </NavLink>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="cart">
                <i className="material-icons">shopping_cart</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="login">Log In</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
