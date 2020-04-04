import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

/*
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        */
const Header = () => (
  <nav className="navbar navbar-custom  navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Bianca Lucia Music Studio</a>
      </div>
      <div className="collapse navbar-collapse" id="custom-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="index.php">Home</a>
          </li>
          <li><a href="about.php">About</a></li>
          <li>
            <a href="lessons.php">Lessons</a>
          </li>
          <li>
            <a href="teaching.php" >Teaching</a>
          </li>
          <li>
            <a href="students.php" >Students</a>
          </li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;


