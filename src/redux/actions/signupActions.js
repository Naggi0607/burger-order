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
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch(signupUserSuccess(token, userId));
      })
      .catch((error) => {
        dispatch(signupUserError(error.response.data.error.message));
      });
  };
};

export const signupUserStart = () => {
  return { type: "SIGNUP_USER_START" };
};

export const signupUserSuccess = (token, userId) => {
  return { type: "SIGNUP_USER_SUCCESS", token, userId };
};

export const signupUserError = (error) => {
  return { type: "SIGNUP_USER_ERROR", error };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};

export const autoLogout = (ms) => {
  console.log("auto logout" + ms);
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
