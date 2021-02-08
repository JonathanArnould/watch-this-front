import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchReviewsData } from "../../redux/actions/reviewsActions.js";
import { fetchMoviesData } from "../../redux/actions/moviesActions.js";
import "./Home.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import MovieCard from "../MovieCard/MovieCard.jsx";

const Home = ({ reviews, movies, handleReviews, handleMovies }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/reviews")
      .then((response) => response.data)
      .then((data) => {
        handleReviews(data);
      });

    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => response.data)
      .then((data) => {
        handleMovies(data);
      });
  }, []);

  console.log(reviews);
  return (
    <div className="home-container">
      <h2 className="review-title">Les films</h2>
      <div className="review-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      <h2 className="review-title">Dernières critiques</h2>
      <div className="review-container">
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviewsList,
  movies: state.movies.moviesList,
});

const mapDispatchToProps = (dispatch) => ({
  handleReviews: (payload) => dispatch(fetchReviewsData(payload)),
  handleMovies: (payload) => dispatch(fetchMoviesData(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
