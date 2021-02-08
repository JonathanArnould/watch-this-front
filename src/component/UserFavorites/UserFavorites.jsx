import React from "react";
import { connect } from "react-redux";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./UserFavorites.css";

const UserFavorites = ({ favorites }) => {
  return (
    <div className="user-favorites-container">
      {favorites &&
        favorites.map((favorite) => <ReviewCard review={favorite} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favoritesList,
});

export default connect(mapStateToProps)(UserFavorites);
