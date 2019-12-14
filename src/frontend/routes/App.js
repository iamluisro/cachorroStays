import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Register from '../containers/RegisterPage';
import Login from '../containers/LoginPage';
import Home from '../containers/HomePage';
import HotelDetails from '../containers/HotelDetails';
import Booking from '../containers/BookingPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import '../assets/styles/App.scss';
import NotFound from '../containers/NotFound';

const App = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  //const initialState = useInitialState(API);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={hasUser ? Home : Login} />
        <Route
          exact
          path='/hotel-details/:id'
          component={hasUser ? HotelDetails : Login}
        />
        <Route exact path='/book' component={hasUser ? Booking : Login} />
        <Route
          exact
          path='/confirmation'
          component={hasUser ? ConfirmationPage : Login}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
