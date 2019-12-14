import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import dogBone from '../assets/img/dogBone-icon.png';
import userIcon from '../assets/img/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <h1>CachorroStays</h1>
        </Link>

        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ? (
              <img src={dogBone} alt='' />
            ) : (
              <img src={userIcon} alt='user icon' />
            )}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
