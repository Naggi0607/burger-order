import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import style from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/loginActions";

export class index extends Component {
  state = {
    email: "",
    password: "",
  };

  login = () => {
    this.props.signinUser(this.state.email, this.state.password);
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className={style.Login}>
        {this.props.userId && <Redirect to="/orders" />}

        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="email address"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="password"
        />
        {this.props.error && (
          <div style={{ color: "red" }}> {this.props.error}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="login1" btnType="Success" onClicked={this.login} />
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(index);
