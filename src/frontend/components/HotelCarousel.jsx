import React from 'react';

const HotelCarousel = ({ children }) => {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  );
};

export default HotelCarousel;
