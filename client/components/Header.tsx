import React from 'react';
import { NavLink } from 'react-router-dom';

export default function (): JSX.Element {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <NavLink className="brand-logo center" to="">
            RockStar
          </NavLink>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="cart">
                <i className="material-icons">shopping_cart</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
