import React from 'react';
import '../assets/styles/components/FavoritesCarousel.scss';

const FavoritesCarousel = ({ children }) => {
  return (
    <>
      <h1 className='myFavorites-text'>Mis favoritos</h1>
      <section className='favCarousel'>
        <div className='carousel__Favcontainer'>
          {children}
        </div>
      </section>
    </>
  );
};

export default FavoritesCarousel;
