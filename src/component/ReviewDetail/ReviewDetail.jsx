import React from "react";
import { connect } from "react-redux";
import "./ReviewDetail.css";

const ReviewDetail = ({ match, reviews }) => {
  console.log(match);
  const { id } = match.params;
  const idReview = parseInt(id, 10);

  const review = reviews.filter((rev) => rev.review_id === idReview)[0];

  const { review_title, review_text, review_image } = review;

  return (
    <div className="review-detail-container">
      <h1>{review_title}</h1>
      <img src={review_image} alt={review_title} />
      <p>{review_text}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviewsList,
});

export default connect(mapStateToProps)(ReviewDetail);
