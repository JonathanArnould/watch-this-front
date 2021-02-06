import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import {
  userDataAction,
  userConnectedAction,
} from "../../redux/actions/usersLogAction";

const Login = ({ user, handleIsConnected, handleUserData }) => {
  const { register, handleSubmit, formState, errors, watch } = useForm({
    mode: "onTouched",
  });

  const { isSubmitted } = formState;

  const onSubmit = async () => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users/login`, watch())
      .then((response) => response.data)
      .then((data) => {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_BASE_URL}/api/users/profil`,
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        })
          .then((response) => response.data)
          /*eslint-disable */
          .then((data) => {
            handleIsConnected(true);
            handleUserData({ dataUser: data.results[0] });
          });
      });
  };

  const validation = {
    user_email: {
      required: "vous devez entrer un email",
      pattern: {
        value: /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{2,3})$/,
        message: "Votre email n'est pas au bon format",
      },
    },
    user_password: {
      required: "vous devez entrer un mot de passe",
      minLength: {
        value: 8,
        message:
          "Ce champs doit contenir au moins 8 caractères alphanumériques",
      },
    },
  };

  const SetFormValidationMessage = () => {
    if (isSubmitted === true) {
      return (
        <div className="alert alert-danger">
          Vos informations sont incorrects
        </div>
      );
    }
    return SetFormValidationMessage;
  };

  return (
    <div>
      {user.data.dataUser && <Redirect to="/" />}
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          {SetFormValidationMessage()}
          <div className="label-input-container">
            <label className="label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className={errors.user_email ? "input-error" : "form-input"}
              ref={register(validation.user_email)}
            />
            {errors.user_email && (
              <span className="feedback-error">
                {errors.user_email.message}
              </span>
            )}
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="password">
              Mot de passe :{" "}
            </label>
            <input
              type="password"
              name="user_password"
              id="user_password"
              className={errors.user_password ? "input-error" : "form-input"}
              ref={register(validation.user_password)}
            />
            {errors.user_password && (
              <span className="feedback-error">
                {errors.user_password.message}
              </span>
            )}
          </div>
          <button className="btn-login" type="submit">
            Se connecter
          </button>
          {/* <button type="button" onClick={(e) => handleClick(e)}>
            Deco
          </button> */}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleIsConnected: (newValue) => dispatch(userConnectedAction(newValue)),
  handleUserData: (newValue) => dispatch(userDataAction(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
