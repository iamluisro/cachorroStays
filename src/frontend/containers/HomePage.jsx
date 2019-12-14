/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import HotelItem from '../components/HotelItem';
import HotelCarousel from '../components/HotelCarousel';
import FavoritesCarousel from '../components/FavoritesCarousel';

const HomePage = ({ hotelData, myFavorites }) => {
  const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };
  return (
    <div className='App'>
      <Layout>
        <div className='home'>
          <div className='home__container'>
            <section className='welcome__container'>
              <h1>cachorroStays</h1>
              <p>Una nueva manera de bookear a tu perrito.</p>
            </section>
            {myFavorites.length > 0 && (
              <FavoritesCarousel>
                {myFavorites.map((item) => (
                  <HotelItem key={item.id} {...item} isList />
                ))}
              </FavoritesCarousel>
            )}
            <HotelCarousel>
              {hotelData.map((item) => (
                <HotelItem key={item.id} {...item} />
              ))}
            </HotelCarousel>
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hotelData: state.hotelData,
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(HomePage);
