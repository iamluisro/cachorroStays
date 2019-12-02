const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myFavorites: state.myFavorites.filter((items) => items.id !== action.payload),
      };

    case 'SET_SELECTED_HOTEL':
      return {
        ...state,
        selectedHotel: state.hotelData.find((items) => items.id === Number(action.payload)),
      };

    default: return state;
  }
};

export default reducer;
