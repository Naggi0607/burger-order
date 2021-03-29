import axios from "axios";
import { createDispatchHook } from "react-redux";

export const signinUser = (email, password) => {
  return function (dispatch) {
    dispatch(signinUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvDvyOhveeYHwPFks4q0kb7aw0JHlVz7w",
        data
      )
      .then((result) => {
        //LocalStorage
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        dispatch(signinUserSuccess(token, userId));
      })
      .catch((error) => {
        dispatch(signinUserError(error));
      });
  };
};

export const signinUserStart = () => {
  return { type: "SIGNIN_USER_START" };
};

export const signinUserSuccess = (token, userId) => {
  return { type: "SIGNIN_USER_SUCCESS", token, userId };
};

export const signinUserError = (error) => {
  return { type: "SIGNIN_USER_ERROR", error };
};
