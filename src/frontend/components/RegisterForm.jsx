import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';

const RegisterForm = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault;
    props.registerRequest(form);
    props.history.push('/');
    console.log(form);
  };

  return (
    <form className='register__container--form' onSubmite={handleSubmit}>
      <input
        className='inputForm'
        type='text'
        placeholder='Name'
        onChange={handleInput}
      />

      <input
        className='inputForm'
        type='text'
        placeholder='Email'
        onChange={handleInput}
      />
      <input className='inputForm' type='password' placeholder='Password' />
      <input
        className='inputForm'
        type='password'
        placeholder='Confirm Password'
        onChange={handleInput}
      />
      <Link to='/'>
        <button type='button' className='registerButton'>
          Register-me
        </button>
      </Link>
      <div className='privacyTerms'>
        <button
          type='button'
          className='privacyTerms__button'
          alt='TermsAndPolicy'
        />
        <p className='privacyTerms__text'>
          I agree to terms and privicy policy
        </p>
      </div>
      <Link to='/login'>
        <button type='button' className='signInButton'>
          Log in
        </button>
      </Link>
    </form>
  );
};

const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(RegisterForm);
