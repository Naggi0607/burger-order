import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import style from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/loginActions";

const Index = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    props.signinUser(email, password);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={style.Login}>
      {props.userId && <Redirect to="/orders" />}

      <input onChange={changeEmail} type="text" placeholder="email address" />
      <input onChange={changePassword} type="password" placeholder="password" />
      {props.error && <div style={{ color: "red" }}> {props.error}</div>}
      {props.saving && <Spinner />}
      <Button text="login" btnType="Success" onClicked={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.loginIn,
    error: state.signupLoginReducer.error,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signinUser: (email, password) =>
      dispatch(actions.signinUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
