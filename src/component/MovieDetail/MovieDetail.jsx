import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Button from "../reusable/Button";
import "./MovieDetail.css";

const MovieDetail = ({ match, movies }) => {
  console.log(match);
  const { id } = match.params;
  const idMovie = parseInt(id, 10);

  const history = useHistory();
  const handleRedirectToPostReview = () => {
    history.push(`/postReviews/${id}`);
  };

  const movie = movies.filter((rev) => rev.movie_id === idMovie)[0];

  const {
    movie_name,
    movie_release_date,
    movie_poster,
    movie_synopsis,
    movie_director,
    movie_casting,
  } = movie;
  return (
    <div className="movie-detail-container">
      <img className="movie-detail-poster" src={movie_poster} />
      <div className="movie-detail-infos-container">
        <h1>{movie_name}</h1>
        <p>{movie_synopsis}</p>
        <p>Date de sortie: {movie_release_date}</p>
        <p>Réalisateur: {movie_director}</p>
        <p>Casting: {movie_casting}</p>
        <Button
          text="Ecrire une critique"
          onClick={() => handleRedirectToPostReview()}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.moviesList,
});

export default connect(mapStateToProps)(MovieDetail);
