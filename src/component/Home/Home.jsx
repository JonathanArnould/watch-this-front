import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchReviewsData } from "../../redux/actions/reviewsActions";
import "./Home.css";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = ({ reviews, handleReviews }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/reviews")
      .then((response) => response.data)
      .then((data) => {
        handleReviews(data);
      });
  }, []);

  console.log(reviews);
  return (
    <div className="home-container">
      <h1>Les dernieres critiques</h1>
      {reviews.map((review) => (
        <div>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviewsList,
});

const mapDispatchToProps = (dispatch) => ({
  handleReviews: (payload) => dispatch(fetchReviewsData(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
