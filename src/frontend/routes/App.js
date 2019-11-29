import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../containers/RegisterPage';
import Login from '../containers/LoginPage';
import Home from '../containers/HomePage';
import HotelDetails from '../containers/HotelDetails';
import Booking from '../containers/BookingPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import '../assets/styles/App.scss';
import NotFound from '../containers/NotFound';

const App = ({ isLogged }) => {
  //const initialState = useInitialState(API);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/hotel-details'
          component={isLogged ? HotelDetails : Login}
        />
        <Route exact path='/book' component={isLogged ? Booking : Login} />
        <Route
          exact
          path='/confirmation'
          component={isLogged ? ConfirmationPage : Login}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
