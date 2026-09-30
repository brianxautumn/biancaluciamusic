import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="copyright font-inc m-b-0">© 2020 <Link to="/">Bianca Lucia Music Studio</Link></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
