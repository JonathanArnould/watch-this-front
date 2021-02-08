import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FavoritesReducer from "./reducers/favorites";
import MoviesReducer from "./reducers/movies";
import ReviewsReducer from "./reducers/reviews";
import usersLog from "./reducers/usersLog";

const persistConfig = { key: "root", storage };

const rootReducer = combineReducers({
  reviews: ReviewsReducer,
  user: usersLog,
  movies: MoviesReducer,
  favorites: FavoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export default (store, persistor);
