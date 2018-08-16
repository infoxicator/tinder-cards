import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div className="nav-wrapper grey darken-4">
      <div className="container">
        <ul id="nav-mobile" className="left">
          <li>
            <Link className="navbar-item" to="/">
            Actors
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/hired">
            Hired Actors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
