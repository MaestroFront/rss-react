import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = function () {
  return (
    <header className="header">
      <div className="header-container">
        <Link className="main-link" to="/">
          Main
        </Link>
        <Link className="about-link" to="/about-us">
          AboutUs
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
