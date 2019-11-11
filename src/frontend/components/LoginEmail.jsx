import React from 'react';
import { Link } from 'react-router-dom';

const LoginEmail = () => {
  return (
    <div className='login__container--with_email'>
      <form action='submit' className='login__container--with_email--form'>
        <input type='text' />
        {' '}
email
        <input type='text' />
        {' '}
password
        <Link to='/'>
          <button type='button'> Login </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginEmail;
