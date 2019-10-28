import React from 'react';
import '../assets/styles/components/confirmation_pg.scss';

import Layout from '../components/Layout';

const ConfirmationPage = () => {
  return (
    <div>
      <Layout>
        <div className='hotel_details'>
          <div className='hotel__details__container'>
            <div className='hero__hotel--booking_info'>
              <h2> Tu reservación está confirmada!</h2>
              <h2> Firulais se quedará en:  Pension Para Mascotas Hikaru </h2>

              <img className='hero__hotel--img' src='./src/assets/img/hikaru.png' alt='hero-hotel-img' />
              <div className='confirmation_pg--checkin-checkout-container'>
                            Fecha de Check-in:
                {' '}
                <br />
                            Enero 1, 2020
              </div>
              <div className='confirmation_pg--checkin-checkout-container'>
                            Pasarán por Firulais:
                {' '}
                <br />

                            Enero 1, 2020 a las 15:00 en tu domicilio.
              </div>
              <div className='confirmation_pg--checkin-checkout-container'>
                            Fecha de Check-out:
                <br />
                            Enero 5, 2020
              </div>

            </div>
            <div className='hotel__confirmation--hotel-contact'>
              <h3>Ubicación:</h3>
              <p> Sto Tomas Ajusco Km 28 1/2 Picacho Ajusco Tlalpan, Mexico</p>
              <h3> Teléfono de Contacto: </h3>
              <p>5562921301</p>
              <h3> Correo Eléctronico: </h3>
              <p>pension@gmail.com</p>

            </div>
            <div className='hotel__confirmation-code'>
              <h1>Código de Reservación</h1>
              <p> XDFP129XD </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>

  );
};

export default ConfirmationPage;
