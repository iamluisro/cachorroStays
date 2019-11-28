/* eslint-disable no-tabs */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import HotelImage from '../assets/img/hikaru.png';
import '../assets/styles/components/home_styles.scss';

const HotelItem = (props) => {
  const {
    id,
    hotelName,
    costPerNight,
    currency,
    hotelDescription,
    hotelRating,
    isList,
  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      hotelName,
      costPerNight,
      currency,
      hotelDescription,
      hotelRating,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div>
      <section className='hotel__container'>
        <div className='hotel__container--details'>
          <img
            className='hotel__Container--img'
            src={HotelImage}
            alt='pethotel'
          />
          <h2>{hotelName}</h2>
          <p>{`${costPerNight} ${currency} / noche`}</p>
          <p>{hotelDescription}</p>
          <div className='hotel__container--rating'>{hotelRating}</div>
          <div className='hotel__container--buttons'>
            {isList ? (
              <button
                type='button'
                className='hotel__tile--buttons'
                onClick={() => handleDeleteFavorite(id)}
              >
                {' '}
                Eliminar de Favoritos
              </button>
            ) : (
              <button
                type='button'
                className='hotel__tile--buttons'
                onClick={handleSetFavorite}
              >
                {' '}
                Agregar a Favoritos
              </button>
            )}

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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(HotelItem);
