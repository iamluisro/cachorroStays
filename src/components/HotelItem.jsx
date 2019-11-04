/* eslint-disable no-tabs */
import React from 'react';
import { Link } from 'react-router-dom';
import HotelImage from '../assets/img/hikaru.png';
import '../assets/styles/components/home_styles.scss';

const HotelItem = (props) => {
  const { hotelName, costPerNight, currency, hotelDescription, hotelRating } = props;
  return (
    <div>
      <section className='hotel__container'>
        <div className='hotel__container--details'>
          <img className='hotel__Container--img' src={HotelImage} alt='pethotel' />
          <h1 className='hotel__container--details--title'>{hotelName}</h1>
          <p className='hotel__container--details--subdetails'>{`${costPerNight} ${currency} / noche`}</p>
          <p className='hotel__container--details--subdetails'>{hotelDescription}</p>
          <div className='hotel__container--rating'>{hotelRating}</div>
          <div className='hotel__container--buttons'>
            <button type='button' className='hotel__tile--buttons'>
              {' '}
							Share
              {' '}
            </button>
            <Link to='/hotel-details'>
              <button type='button' className='hotel__tile--buttons'>
								Explore
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelItem;
