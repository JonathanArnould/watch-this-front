import React from "react";
import { connect } from "react-redux";
import "./UserInfo.css";

const UserInfo = ({ user }) => {
  console.log(user);
  const { user_avatar, user_name } = user;

  return (
    <div className="user-info-container">
      <img className="user-info-avatar" src={user_avatar} alt={user_name} />
      <h2 className="user-info-name">Bienvenue {user_name}!</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data.dataUser,
});

export default connect(mapStateToProps)(UserInfo);
