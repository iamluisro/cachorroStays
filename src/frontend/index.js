import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  user: {},
  myFavorites: [],
  hotelData: [
    {
      id: 1,
      hotelName: 'Pension Para Mascotas Hikaru',
      hotelImg: '../assets/img/hikaru.png',
      hotelDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      hotelWebsite: 'https://bizjournals.com/sed/vel/enim.xml',
      hotelAddress: 'Sto Tomas Ajusco Km 28 1/2 Picacho Ajusco Tlalpan, Mexico',
      hotelRating: '*****',
      costPerNight: 200,
      currency: 'MXN',
      picksUpDog: true,
      yearEstablished: 1997,
    },
    {
      id: 2,
      hotelName: 'Puppy Hotel',
      hotelImg: '../assets/img/hikaru.png',
      hotelDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      hotelWebsite: 'https://bizjournals.com/sed/vel/enim.xml',
      hotelAddress: 'Sto Tomas Ajusco Km 28 1/2 Picacho Ajusco Tlalpan, Mexico',
      hotelRating: '*****',
      costPerNight: 200,
      currency: 'MXN',
      picksUpDog: true,
      yearEstablished: 1997,
    },
    {
      id: 3,
      hotelName: 'Hotel de Perrhijos',
      hotelImg: '../assets/img/hikaru.png',
      hotelDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      hotelWebsite: 'https://bizjournals.com/sed/vel/enim.xml',
      hotelAddress: 'Platzi México',
      hotelRating: '*****',
      costPerNight: 200,
      currency: 'MXN',
      picksUpDog: true,
      yearEstablished: 1997,
    },
  ],
};
console.log(initialState);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    {/* este initialState.user.name me sale vacio... y no logro llenarlo para que cuando
  el login sea exitoso, el store reconozca que el "user" tiene algo dentro. */}
    <App isLogged={initialState.user.name} />
  </Provider>,
  document.getElementById('app'),
);
