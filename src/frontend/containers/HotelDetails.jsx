import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/hotel_details_styles.scss';
import Layout from '../components/Layout';
import hotelImg from '../assets/img/hikaru.png';

const HotelDetails = (props) => {
  return (
    <Layout>
      <div className='hotel_details'>
        <div className='hotel__info--container'>
          <span className='hero__section'>
            <img src={hotelImg} alt='background' />
            <Link to='/book'>
              <button className='hero__img--cta--button' type='button'>
                {' '}
                <p>RESERVA LAS NOCHES DE TU PERRITO</p>
              </button>
            </Link>
          </span>
          <div className='hero__hotel--title'>Pension Para Mascotas Hikaru</div>
          <div className='hero__hotel--rating__system'>****</div>
          <div className='hotel_address'>
            Sto Tomas Ajusco Km 28 1/2 Picacho Ajusco Tlalpan, Mexico
          </div>
          <div className='hotel__description'>
            <h1 className='hotel__subtitle'>Descripción</h1>
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
  );
};

export default HotelDetails;
