import React from 'react';
import { Link } from 'react-router-dom';

/*
       
      
              <li>
            <Link to="/students">Students</Link>
          </li>
        */
const Header = () => (
  <nav className="navbar navbar-custom  navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Bianca Lucia Music Studio</Link>
      </div>
      <div>
        <ul className="navbar-full">
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/teaching">Teaching</Link>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;


