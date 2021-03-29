import React, { Fragment } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";
import MenuItem from "../MenuItem";
const index = (props) => {
  return (
    <div>
      <ul className={style.Menu}>
        {props.userId ? (
          <Fragment>
            <MenuItem link="/orders">Orders</MenuItem>
            <MenuItem link="/logout">Logout</MenuItem>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">SignUp</MenuItem>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(index);
