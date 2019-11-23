import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/booking_styles.scss';

const BookingItem = () => {
  return (
    <div>
      <section className='booking'>
        <h1>Reservación para: kangaroo Valley Safari</h1>
        <section className='booking__container'>
          <form className='booking__container--form'>
            <h1>¿Cuales son tus fechas de viaje?</h1>
            <input className='input' type='text' placeholder='Check-in' />
            <input className='input' type='text' placeholder='Check-out' />
            <h1>Acerca de ti y tu perrhijo</h1>
            <input
              className='input'
              type='text'
              placeholder='¿Cuál es tu nombre?'
            />
            <input
              className='input'
              type='text'
              placeholder='¿Cómo se llama tu perrito?'
            />
            <input
              className='input'
              type='text'
              placeholder='Tu número de whatsApp'
            />
            <input
              className='input'
              type='text'
              placeholder='Tu correo electronico'
            />
            <h1>¿Quieres que vayan a recoger a tu perrito?</h1>
            <button type='button'>¡Sí! Pasen a recoger a mi perrito</button>
            <button type='button'>No, yo voy a dejar a mi perrito</button>
            <button type='button'>Confirmar reservación</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default BookingItem;
