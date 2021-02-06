const initialReviewsState = {
  reviewsList: [],
};

const ReviewsReducer = (state = initialReviewsState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS": {
      return { ...state, reviewsList: action.payload };
    }
    default:
      return state;
  }
};

export default ReviewsReducer;
