import React from "react";
import { useHistory } from "react-router";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { movie_poster, movie_name, movie_id } = movie;

  const history = useHistory();

  const handleMovie = () => {
    history.push(`/movies/${movie_id}`);
  };

  return (
    <div className="movie-card" onClick={() => handleMovie()}>
      <img className="movie-poster" src={movie_poster} alt={movie_name} />
    </div>
  );
};

export default MovieCard;
