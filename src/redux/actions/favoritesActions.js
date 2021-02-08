export const fetchFavoritesData = (payload) => ({
  type: "FETCH_FAVORITES",
  payload,
});

export const clearFavoritesData = () => ({
  type: "CLEAR_FAVORITES_DATA",
});
