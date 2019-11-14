import React from 'react';
import '../assets/styles/components/FavoritesCarousel.scss';

const FavoritesCarousel = ({ children }) => {
  return (
    <section className='favCarousel'>
      <h1>Mis favoritos</h1>
      <div className='carousel__Favcontainer'>
        {children}
      </div>
    </section>
  );
};

export default FavoritesCarousel;
