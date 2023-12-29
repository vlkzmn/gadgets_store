import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img src="./img/logo_gadgets.png" className="logo__image" alt="Logo" />
      </Link>
    </div>
  );
};
