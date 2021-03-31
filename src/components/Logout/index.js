import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import { Redirect } from "react-router-dom";

const Index = (props) => {
  useEffect(() => {
    props.logout();
  }, []);

  return (
    <div>
      <Redirect to="/" />;
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Index);
