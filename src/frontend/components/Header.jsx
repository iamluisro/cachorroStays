import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import dogBone from '../../assets/img/dogBone-icon.png';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <h1>CachorroStays</h1>
        </Link>

        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={dogBone} alt='' />
            <p>Perfil</p>
          </div>
          <ul>
            <Link to='/register'>
              <li>Regístrate</li>
            </Link>
            <Link to='/login'>
              <li>Iniciar Sesión</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
