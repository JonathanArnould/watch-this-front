import React from "react";
import { connect } from "react-redux";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./UserReview.css";

const UserReview = ({ user, reviews }) => {
  const userReviewArr =
    user &&
    reviews.filter((userReview) => userReview.review_user_id === user.user_id);

  return (
    <div className="user-review-container">
      {userReviewArr.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data.dataUser,
  reviews: state.reviews.reviewsList,
});

export default connect(mapStateToProps)(UserReview);
