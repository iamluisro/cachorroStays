import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginSocialMedia from '../components/LoginSocialMedia';
import { loginUser } from '../actions';
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
    props.loginUser(form);
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
            <form
              className='login__container--with_email--form'
              onSubmit={handleSumbit}
            >
              <input
                name='email'
                type='email'
                placeholder='email'
                onChange={handleInput}
              />

              <input
                name='password'
                type='password'
                placeholder='contraseña'
                onChange={handleInput}
              />

              <button type='submit'> Login </button>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);
