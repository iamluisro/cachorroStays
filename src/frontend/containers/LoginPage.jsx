import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginSocialMedia from '../components/LoginSocialMedia';
import LoginEmail from '../components/LoginEmail';
import { loginRequest } from '../actions';
import Layout from '../components/Layout';
import '../assets/styles/components/LoginPage.scss';

const LoginPage = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
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
    <Layout>
      <section className='login'>
        <section className='login__container'>
          <div className='Login__contianer--with-text'>
            <h1>Iniciar Sesión con ...</h1>
          </div>
          <LoginSocialMedia />
          <div className='login__container--with_email'>
            <form className='login__container--with_email--form' onSubmit={handleSumbit}>
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
              <button type='submit'> Login </button>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LoginPage);
