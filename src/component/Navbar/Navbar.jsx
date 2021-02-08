import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
import Button from "../reusable/Button";
import {
  userConnectedAction,
  userDeconnectedAction,
} from "../../redux/actions/usersLogAction";
import { clearFavoritesData } from "../../redux/actions/favoritesActions";

const Header = ({
  user,
  handleConnected,
  handleClearUserData,
  handleClearFavoritesData,
}) => {
  const handleLogOut = () => {
    handleConnected(false);
    handleClearUserData();
    handleClearFavoritesData();
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Watch This</h1>
      <div className="navbar-link-container">
        <Link className="navbar-link" to="/">
          Accueil
        </Link>
        {!user.connected ? (
          <Link className="navbar-link" to="/login">
            Se connecter
          </Link>
        ) : (
          <div>
            <Link className="navbar-link" to="/profil">
              Mon profil
            </Link>
            <Button
              className="btn-logout"
              text="Deconnexion"
              onClick={() => handleLogOut()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleConnected: (newValue) => dispatch(userConnectedAction(newValue)),
  handleClearUserData: () => dispatch(userDeconnectedAction()),
  handleClearFavoritesData: () => dispatch(clearFavoritesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
