import axios from "axios";
import { createDispatchHook } from "react-redux";

export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvDvyOhveeYHwPFks4q0kb7aw0JHlVz7w",
        data
      )
      .then((result) => {
        dispatch(signupUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(signupUserError(error.response.data.error.message));
      });
  };
};

export const signupUserStart = () => {
  return { type: "SIGNUP_USER_START" };
};

export const signupUserSuccess = (data) => {
  return { type: "SIGNUP_USER_SUCCESS", data };
};

export const signupUserError = (error) => {
  return { type: "SIGNUP_USER_ERROR", error };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: "LOGOUT",
  };
};
