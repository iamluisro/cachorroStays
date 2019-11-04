/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from '../components/Layout';
import HotelItem from '../components/HotelItem';
import HotelCarousel from '../components/HotelCarousel';
import useInitialState from '../hooks/useInititalState';

const API = 'http://localhost:3000/hotelData';

const HomePage = () => {
  const initialState = useInitialState(API);
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
              <HotelCarousel>
                {initialState.map((item) => (
                  <HotelItem key={item.id} {...item} />
                ))}
              </HotelCarousel>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
