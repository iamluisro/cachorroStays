import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/HomePage';
import HotelDetails from '../containers/HotelDetails';
import Booking from '../containers/BookingPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hotel-details' component={HotelDetails} />
        <Route exact path='/book' component={Booking} />
        <Route exact path='/confirmation' component={ConfirmationPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
