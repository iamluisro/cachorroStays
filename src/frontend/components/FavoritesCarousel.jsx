import React from 'react';
import '../assets/styles/components/FavoritesCarousel.scss';

const FavoritesCarousel = ({ children }) => {
  return (
    <>
      <div className='myFavorites-text'>
        <h1>Mis favoritos</h1>
      </div>
      <section className='favCarousel'>
        <div className='carousel__Favcontainer'>
          {children}
        </div>
      </section>
    </>
  );
};

export default FavoritesCarousel;
