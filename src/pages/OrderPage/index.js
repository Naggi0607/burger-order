import React, { useEffect } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

import * as actions from "../../redux/actions/orderActions";

const Index = (props) => {
  useEffect(() => {
    props.loadOrders();
  }, []);

  return (
    <div className={style.Orderpage}>
      <h1>Your orders</h1>
      {props.loading ? (
        <Spinner />
      ) : (
        props.orders.map((el) => <Order key={el[0]} Order={el[1]} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
