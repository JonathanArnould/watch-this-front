const initialMoviesState = {
  moviesList: [],
};

const MoviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return { ...state, moviesList: action.payload };
    }
    default:
      return state;
  }
};

export default MoviesReducer;
