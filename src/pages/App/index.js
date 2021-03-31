import React, { useState, useEffect } from "react";
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
import * as signupActions from "../../redux/actions/signupActions";

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));

    if (token) {
      if (expireDate > new Date()) {
        // Token doesn't expired, auto login
        props.autologin(token, userId);

        // Calculation token expire time and autologout

        const diff = expireDate.getTime() - new Date().getTime();
        props.augoLogout(diff);
      } else {
        // Token expired, logout
        props.logout();
      }
    }
  }, []);
  const toggleSidebar = (prevState) => {
    setShowSidebar(!prevState.showSidebar);
  };

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Toolbar toggleSidebar={toggleSidebar} />
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <main className={styles.Content}>
          {props.userId ? (
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
};

const mapStateToProps = (state) => {
  return { userId: state.signupLoginReducer.userId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autologin: (token, userId) =>
      dispatch(actions.signinUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    augoLogout: (ms) => dispatch(signupActions.autoLogout(ms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
