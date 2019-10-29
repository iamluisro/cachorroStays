import React from 'react';
import HotelImage from '../assets/img/hikaru.png';
import '../assets/styles/home_styles.scss';

const HotelItem = () => {
  return (
    <div>
      <section className='hotel__container'>
        <div className='hotel__container--details'>
          <img className='hotel__Container--img' src={HotelImage} alt='pethotel' />
          <h1 className='hotel__container--details--title'>Pension Para Mascotas Hikaru</h1>
          <p className='hotel__container--details--subdetails'>200MXN$ / noche</p>
          <p className='hotel__container--details--subdetails'>
            Sto Tomas Ajusco Km 28 1/2 Picacho Ajusco Tlalpan, Mexico
          </p>
          <div className='hotel__container--rating'>*****</div>
          <div className='hotel__container--buttons'>
            <button type='button' className='hotel__tile--buttons'>Share</button>
            <button type='button' className='hotel__tile--buttons'>Explore</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelItem;
