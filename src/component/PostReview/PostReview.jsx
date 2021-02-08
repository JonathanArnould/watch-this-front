import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Button from "../reusable/Button";
import "./PostReview.css";
import { fetchReviewsData } from "../../redux/actions/reviewsActions";

const PostReview = ({ user, movies, handleReviews, match }) => {
  const { user_id } = user.dataUser;
  const { idMovie } = match.params;
  const movieId = parseInt(idMovie, 10);

  const [reviewData, setReviewData] = useState({
    review_user_id: user_id,
    review_movie_id: movieId,
  });

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.id]: e.target.value });
  };

  const handleText = (e) => {
    const text = e.target.value;
    setReviewData({ ...reviewData, [e.target.id]: text });
  };

  /* const handleSelect = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.id]: parseInt(e.target.value, 10),
    });
  }; */

  const handleValidation = async () => {
    await axios.post("http://localhost:3000/api/reviews", reviewData);

    axios
      .get("http://localhost:3000/api/reviews")
      .then((response) => response.data)
      .then((data) => {
        handleReviews(data);
      });
  };

  console.log(reviewData);

  return (
    <div>
      <div>
        {/* <select
          name="movie_id"
          id="review_movie_id"
          onChange={(e) => handleSelect(e)}
        >
          <option>Choisissez un film</option>
          {movies.map((movie) => (
            <option value={movie.movie_id}>{movie.movie_name}</option>
          ))}
        </select> */}
        <input
          type="text"
          name="review_title"
          id="review_title"
          placeholder="Titre"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="review_image"
          id="review_image"
          placeholder="URL de votre image"
          onChange={(e) => handleChange(e)}
        />
        <textarea
          type="text"
          name="review_text"
          id="review_text"
          placeholder="Votre critique..."
          onChange={(e) => handleText(e)}
        />
      </div>
      <Button text="Valider" onClick={() => handleValidation()} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
  movies: state.movies.moviesList,
});

const mapDispatchToProps = (dispatch) => ({
  handleReviews: (payload) => dispatch(fetchReviewsData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostReview);
