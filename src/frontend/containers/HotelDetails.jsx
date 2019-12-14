import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/hotel_details_styles.scss';
import Layout from '../components/Layout';
import { setSelectedHotel } from '../actions';
import hotelImg from '../../assets/img/hikaru.png';
import NotFound from './NotFound';

const HotelDetails = (props) => {

  const { id } = props.match.params;
  const hasHotel = props.selectedHotel;

  useEffect(() => {
    props.setSelectedHotel(id);
  }, []);

  return hasHotel ? (
    <Layout>
      <div className='hotel_details'>
        <div className='hotel__details__container'>
          <span className='hero__section'>
            <img className='hero__hotel--img' src={hotelImg} alt='backgruond' />
            <Link to='/book'>
              <button className='hero__img--cta--button' type='button'>
                {' '}
                <p>RESERVA LAS NOCHES DE TU PERRITO</p>
                {' '}
              </button>
            </Link>
          </span>
          <div className='hero__hotel--title'>{props.selectedHotel.hotelName}</div>
          <div className='hero__hotel--rating__system'>{props.selectedHotel.hotelRating}</div>
          <div className='hotel_address'>
            {props.selectedHotel.hotelAddress}
          </div>
          <div className='hotel__description'>
            <h1 className='hotel__subtitle'>Descripción</h1>
            <p className='hotel__description--description'>
              {props.selectedHotel.hotelDescription}
            </p>
            <div className='hotel__additional__services'>
              <h1 className='hotel__subtitle'>Servicios Adicionales</h1>
              <p className='hotel__description--description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&aposs standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className='hotel__social__media'>
                <h1 className='hotel__subtitle'>
                  Redes Sociales de este hotel
                </h1>
                <p className='hotel__social__media--icons'>FB Twitter IG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : <NotFound />;
};

const mapDispatchToProps = {
  setSelectedHotel,
};

const mapStateToProps = (state) => {
  return {
    selectedHotel: state.selectedHotel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);
