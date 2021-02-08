import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { fetchFavoritesData } from "../../redux/actions/favoritesActions";
import Button from "../reusable/Button";
import UserInfo from "../UserInfo/UserInfo";
import "./ReviewDetail.css";

const ReviewDetail = ({ match, reviews, user, handleFavorites }) => {
  console.log(user);
  const { id } = match.params;
  const idReview = parseInt(id, 10);

  const review = reviews.filter((rev) => rev.review_id === idReview)[0];

  const {
    review_title,
    review_text,
    review_image,
    review_movie_id,
    review_id,
    movie_name,
    user_name,
    user_avatar,
  } = review;

  const history = useHistory();
  const handleRedirectToPostReview = () => {
    history.push(`/postReviews/${review_movie_id}`);
  };

  const handleFavorite = async () => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/favorites`, {
      favorite_user_id: user.user_id,
      favorite_review_id: review_id,
    });
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/users/${user.user_id}/favorites`
      )
      .then((response) => response.data)
      .then((data) => {
        handleFavorites(data);
      });
  };

  return (
    <div className="review-detail-container">
      <div className="review-detail-image-container">
        <img
          className="review-detail-image"
          src={review_image}
          alt={review_title}
        />
        <h1 className="review-detail-title">{review_title}</h1>
      </div>
      <div className="review-user-info-container">
        <img
          className="review-user-info-avatar"
          src={user_avatar}
          alt={user_name}
        />
        <h2 className="review-user-info-name">
          Critique publiée par {user_name}
        </h2>
        <button className="btn-like" onClick={() => handleFavorite()}>
          Favori
        </button>
      </div>
      <p className="review-text">{review_text}</p>
      <Button
        className="review-detail-post-btn"
        text="Publier une critique sur ce film"
        onClick={() => handleRedirectToPostReview()}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviewsList,
  user: state.user.data.dataUser,
});

const mapDispatchToProps = (dispatch) => ({
  handleFavorites: (payload) => dispatch(fetchFavoritesData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail);
