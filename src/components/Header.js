import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="header-container">
    <div className="header">
      <Link className="header__logo" to="/dashboard">
        <div className="header__logo__image"></div>
        Melon
      </Link>
      <button className="header__logout">Logout</button>
    </div>
  </div>
);
