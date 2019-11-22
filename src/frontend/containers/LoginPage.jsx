import React from 'react';
import LoginSocialMedia from '../components/LoginSocialMedia';
import LoginEmail from '../components/LoginEmail';
import Layout from '../components/Layout';
import '../assets/styles/components/LoginPage.scss';

const LoginPage = () => {
  return (
    <Layout>
      <section className='login'>
        <section className='login__container'>
          <div className='Login__contianer--with-text'>
            <h1>Login with</h1>
          </div>
          <LoginSocialMedia />
          <LoginEmail />
        </section>
      </section>
    </Layout>
  );
};

export default LoginPage;
