import React from 'react';
import HotelItem from '../components/HotelItem';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <div className='App'>
      <Layout>
        <div>
          <div className='home'>
            <div className='home__container'>
              <section className='welcome__container'>
                <h1>cachorroStays</h1>
                <p>Una nueva manera de bookear a tu perrito.</p>
              </section>
              <HotelItem />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
