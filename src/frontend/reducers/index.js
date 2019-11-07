const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    default: return state;
  }
};

export default reducer;
