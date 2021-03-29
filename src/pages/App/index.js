import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import Sidebar from "../../components/Sidebar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Signup from "../SignupPage";
import Logout from "../../components/Logout";

import * as actions from "../../redux/actions/loginActions";

class App extends Component {
  state = { showSidebar: false };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    token && this.props.autologin(token, userId);
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Toolbar toggleSidebar={this.toggleSidebar} />
          <Sidebar
            showSidebar={this.state.showSidebar}
            toggleSidebar={this.toggleSidebar}
          />
          <main className={styles.Content}>
            {this.props.userId ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders" component={OrderPage} />
                <Route path="/ship" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={Signup} />
                <Redirect to="/login" />
              </Switch>
            )}
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.signupLoginReducer.userId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autologin: (token, userId) =>
      dispatch(actions.signinUserSuccess(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
