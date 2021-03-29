import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import style from "./style.module.css";
import Button from "../General/Button";
import axios from "../../axios_orders";
import Spinner from "../General/Spinner";

import * as actions from "../../redux/actions/orderActions";

class index extends Component {
  state = {
    name: null,
    address: null,
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }
  saveOrder = () => {
    const order = {
      userId: this.props.userId,
      auth: this.props.token,
      ingredients: this.props.ingredients,
      price: this.props.price,
      address: {
        name: this.state.name,
        address: this.state.address,
      },
    };

    this.props.saveOrder(order);
  };
  render() {
    return (
      <div className={style.ContactData}>
        <div>
          {this.props.newOrderStatus.error &&
            `Error : ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={this.changeAddress}
              type="text"
              name="address"
              placeholder="Address"
            />
            <Button onClicked={this.saveOrder} btnType="Success" text="ORDER" />
          </div>
        )}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
