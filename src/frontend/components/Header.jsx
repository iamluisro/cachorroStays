import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <h1>CachorroStays</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
