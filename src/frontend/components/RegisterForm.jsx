import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

const RegisterForm = (props) => {
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
    event.preventDefault();
    props.registerUser(form);
    console.log(form);
  };

  return (
    <form className='register__container--form' onSubmit={handleSubmit}>
      <input
        name='name'
        className='inputForm'
        type='text'
        placeholder='Name'
        onChange={handleInput}
      />

      <input
        name='email'
        className='inputForm'
        type='text'
        placeholder='Email'
        onChange={handleInput}
      />
      <input
        name='password'
        className='inputForm'
        type='password'
        placeholder='Password'
        onChange={handleInput}
      />

      <button type='submit' className='registerButton'>
        Register-me
      </button>

      <Link to='/login'>
        <button type='button' className='signInButton'>
          Log in
        </button>
      </Link>
    </form>
  );
};

const mapDispatchToProps = {
  registerUser,
};
export default connect(null, mapDispatchToProps)(RegisterForm);
