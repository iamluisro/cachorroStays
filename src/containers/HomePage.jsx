import React from 'react';
import HotelItem from '../components/HotelItem';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div>
        <div className='home'>
          <div className='home__container'>
            <section className='welcome__container'>
              <h1>Mensaje de Bienvenida</h1>
            </section>
            <HotelItem />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
