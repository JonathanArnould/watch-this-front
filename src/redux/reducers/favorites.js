const initialFavoritesState = {
  favoritesList: [],
};

const FavoritesReducer = (state = initialFavoritesState, action) => {
  switch (action.type) {
    case "FETCH_FAVORITES": {
      return { ...state, favoritesList: action.payload };
    }
    case "CLEAR_FAVORITES_DATA": {
      return { ...state, favoritesList: [] };
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
