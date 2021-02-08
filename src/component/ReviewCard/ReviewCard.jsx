import React from "react";
import { useHistory } from "react-router";
import Button from "../reusable/Button";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { review_title, review_image, review_id, movie_name } = review;

  const history = useHistory();

  const handleView = () => {
    history.push(`/reviews/${review_id}`);
  };
  return (
    <div className="review-card-container">
      <div className="review-card-banner">
        <div className="review-card-banner-title">
          <h2 className="review-card-title">{review_title}</h2>
          <h3 className="review-card-movie-title">{movie_name}</h3>
          <p></p>
        </div>
        <Button
          className="review-card-button"
          text="Voir"
          onClick={() => handleView()}
        />
      </div>
      <img
        className="review-card-image"
        src={review_image}
        alt={review_title}
      />
    </div>
  );
};

export default ReviewCard;
