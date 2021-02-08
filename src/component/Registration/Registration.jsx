import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import "./Registration.css";

const Registration = () => {
  const { register, handleSubmit, formState, errors, watch } = useForm({
    mode: "onTouched",
  });

  const { isSubmitted } = formState;

  const history = useHistory();

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/users`, watch());
    history.push("/login");
  };

  const validation = {
    user_avatar: {
      required: "vous devez entrer l'url de votre avatar",
      pattern: {
        value: 2,
        message: "Votre url n'est pas au bon format",
      },
    },
    user_name: {
      required: "vous devez entrer votre nom",
      pattern: {
        value: 2,
        message: "Votre nom n'est pas au bon format",
      },
    },
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
      <form className="form-register-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          {SetFormValidationMessage()}
          <div className="label-input-container">
            <label className="label" htmlFor="name">
              Votre Nom:{" "}
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Entrez votre nom"
              className={errors.user_email ? "input-error" : "form-input"}
              ref={register(validation.user_name)}
            />
            {errors.user_name && (
              <span className="feedback-error">{errors.user_name.message}</span>
            )}
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="avatar">
              Avatar:{" "}
            </label>
            <input
              type="text"
              name="user_avatar"
              id="user_avatar"
              placeholder="URL de votre avatar"
              className={errors.user_avatar ? "input-error" : "form-input"}
              ref={register(validation.user_avatar)}
            />
            {errors.user_avatar && (
              <span className="feedback-error">
                {errors.user_avatar.message}
              </span>
            )}
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Entrez votre e-mail"
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
              placeholder="Entrez votre mot de passe"
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
        </div>
      </form>
    </div>
  );
};

export default Registration;
