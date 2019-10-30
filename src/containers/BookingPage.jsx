import React from 'react';
import Layout from '../components/Layout';
import BookingItem from '../components/BookingItem';
import '../assets/styles/components/booking_styles.scss';

const BookingPage = () => {
  return (
    <Layout>
      <BookingItem />
    </Layout>
  );
};

export default BookingPage;
