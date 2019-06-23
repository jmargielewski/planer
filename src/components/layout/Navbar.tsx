import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedUpLinks from './SignedUpLinks';

const Navbar = () => {
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Planer
        </Link>
        <SignedInLinks />
        <SignedUpLinks />
      </div>
    </nav>
  );
};

export default Navbar;
