import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import style from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/signupActions";

const Index = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const Signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      alert("Password does not match");
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  return (
    <div className={style.Signup}>
      <h1>SignUp</h1>
      {props.userId && <Redirect to="/" />}
      <input onChange={changeEmail} type="text" placeholder="email address" />
      <input
        onChange={changePassword1}
        type="password"
        placeholder="Password"
      />
      <input
        onChange={changePassword2}
        type="password"
        placeholder="Confirm password"
      />
      {props.error && <div style={{ color: "red" }}> {props.error}</div>}
      {props.saving && <Spinner />}
      <Button text="Signup" btnType="Danger" onClicked={Signup} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.loading,
    error: state.signupLoginReducer.error,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
