import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/booking_styles.scss';

const BookingItem = () => {
  return (
    <div>
      <section className='booking'>
        <div className='hotel_name'>
          <h1>Reservación para: kangaroo Valley Safari</h1>
        </div>
        <section className='booking__container'>
          <form className='booking__container--form'>
            <h1>selecciona las fechas para tu perrito</h1>
            <input className='input' type='text' placeholder='Check-in' />
            <input className='input' type='text' placeholder='Check-out' />
            <h1>Información adicional</h1>
            <input className='input' type='text' placeholder='Nombre del propietario' />
            <input className='input' type='text' placeholder='Nombre del perrito' />
            <input className='input' type='text' placeholder='Whatsapp' />
            <input className='input' type='text' placeholder='Email del propietario' />
          </form>
          <section className='booking__container--additional-services'>
            <h1>Selecciona un método de entrega de perrito</h1>
            <button type='button'>Recoger a mi perrito</button>
            {' '}
            <br />
            <button type='button'>Yo voy a dejar a mi perrito</button>
          </section>
          <div className='confirm'>
            <Link to='/confirmation'>
              <button type='button'>Confirmar reservación</button>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BookingItem;
