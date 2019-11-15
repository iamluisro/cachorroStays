import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <form className='register__container--form'>
      <input className='inputForm' type='text' placeholder='First name' />
      <input className='inputForm' type='text' placeholder='Last name' />
      <input className='inputForm' type='text' placeholder='Username' />
      <input className='inputForm' type='text' placeholder='Email' />
      <input className='inputForm' type='text' placeholder='Phone Number' />
      <input className='inputForm' type='password' placeholder='Password' />
      <input className='inputForm' type='password' placeholder='Confirm Password' />
      <Link to='/'>
        <button type='button' className='registerButton'>Register-me</button>
      </Link>
      <div className='privacyTerms'>
        <button type='button' className='privacyTerms__button' alt='TermsAndPolicy' />
        <p className='privacyTerms__text'>I agree to terms and privicy policy</p>
      </div>
      <Link to='/'>
        <button type='button' className='signInButton'>Log in</button>
      </Link>
    </form>
  );
};

export default RegisterForm;
