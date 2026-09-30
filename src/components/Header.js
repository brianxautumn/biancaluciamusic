import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/*
       
      
              <li>
            <Link to="/students">Students</Link>
          </li>
        */
const Header = () => (
  <nav className="navbar navbar-custom  navbar-fixed-top" aria-label="Main">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Bianca Lucia Music Studio</Link>
      </div>
      <div>
        <ul className="navbar-full">
          <li><NavLink to="/about">About</NavLink></li>
          <li>
            <NavLink to="/lessons">Lessons</NavLink>
          </li>
          <li>
            <NavLink to="/teaching">Teaching</NavLink>
          </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;


