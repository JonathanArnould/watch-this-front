import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import UserReview from "../UserReview/UserReview";
import "./UserProfile.css";
import { fetchFavoritesData } from "../../redux/actions/favoritesActions";
import UserFavorites from "../UserFavorites/UserFavorites";

const UserProfile = ({ user, handleFavorites }) => {
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/users/${user.user_id}/favorites`
      )
      .then((response) => response.data)
      .then((data) => {
        handleFavorites(data);
      });
  }, []);

  return (
    <div>
      <UserInfo />
      <h1 className="user-profile-reviews-title">Mes dernières critiques</h1>
      <UserReview />
      <h1 className="user-profile-reviews-title">Mes critiques favorites</h1>
      <UserFavorites />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data.dataUser,
});

const mapDispatchToProps = (dispatch) => ({
  handleFavorites: (payload) => dispatch(fetchFavoritesData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
