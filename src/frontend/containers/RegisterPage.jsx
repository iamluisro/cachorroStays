import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../assets/styles/components/RegisterPage.scss';
import Layout from '../components/Layout';

const RegisterPage = () => {
  return (
    <Layout>
      <section className='register'>
        <h1>Register</h1>
        <RegisterForm />
      </section>
    </Layout>
  );
};

export default RegisterPage;
