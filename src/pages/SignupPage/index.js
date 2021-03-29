import React, { Component } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/signupActions";
import { Redirect } from "react-router-dom";
export class index extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
  };

  Signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      alert("Password does not match");
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };
  render() {
    return (
      <div className={style.Signup}>
        <h1>SignUp</h1>
        {this.props.userId && <Redirect to="/" />}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="email address"
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Confirm password"
        />
        {this.props.error && (
          <div style={{ color: "red" }}> {this.props.error}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="Signup" btnType="Danger" onClicked={this.Signup} />
      </div>
    );
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(index);
