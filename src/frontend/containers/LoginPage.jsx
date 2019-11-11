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
          <h1>Login with</h1>
          <LoginSocialMedia />
          <LoginEmail />
        </section>
      </section>
    </Layout>
  );
};

export default LoginPage;
