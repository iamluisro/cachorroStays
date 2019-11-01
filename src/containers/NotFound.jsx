import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles/components/notFound_styles.scss';
//import dogNotFoundImg from '../assets/img/dog-notfound.png';

const NotFound = () => {
  return (
    <Layout>
      <div className='notFound'>
        <h1>404</h1>
        <h2>
					Page not found.
          <br />
					Lo sentimos, No pudimos encontrar dicho sitio.
        </h2>
        {/*   <img src={dogNotFoundImg} alt='Dog-swimming' /> */}
      </div>
    </Layout>
  );
};

export default NotFound;
