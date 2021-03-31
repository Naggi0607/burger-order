import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import style from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";

import * as actions from "../../redux/actions/orderActions";

const Index = (props) => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      props.history.replace("/orders");
    }
  });

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  const saveOrder = () => {
    const order = {
      userId: props.userId,
      auth: props.token,
      ingredients: props.ingredients,
      price: props.price,
      address: {
        name,
        address,
      },
    };

    props.saveOrder(order);
  };
  return (
    <div className={style.ContactData}>
      <div>
        {props.newOrderStatus.error && `Error : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={changeAddress}
            type="text"
            name="address"
            placeholder="Address"
          />
          <Button onClicked={saveOrder} btnType="Success" text="ORDER" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId,
    token: state.signupLoginReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (order) => dispatch(actions.saveOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
