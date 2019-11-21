import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';

const LoginEmail = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };

  return (
    <div className='login__container--with_email'>
      <form action='submit' className='login__container--with_email--form' onSubmit={handleSumbit}>
        <input
          name='email'
          type='text'
          onChange={handleInput}
        />
        {' '}
          email
        <input
          name='password'
          type='password'
          onChange={handleInput}
        />
        {' '}
          password
        <Link to='/'>
          <button type='submit'> Login </button>
        </Link>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LoginEmail);
