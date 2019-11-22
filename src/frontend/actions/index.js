import axios from 'axios';

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload) => {
  return (dispatch) => {
    axios({
      url: 'https://cachorrostays.iamluisro.now.sh/api/auth/sign-up',
      method: 'post',
      data: {
        ...payload,
        isAdmin: false,
      },
    })
      .then((data) => {
        // dispatch(loginUser(payload));
        console.log(data);
      })
      .catch((err) => dispatch(setError(err)));
  };
};
