import React, { Component } from "react";
import style from "./style.module.css";
import Button from "../General/Button";
import axios from "../../axios_orders";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
class index extends Component {
  state = {
    name: null,
    address: null,
    loading: false,
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  saveOrder = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      address: {
        name: this.state.name,
        address: this.state.address,
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("Order successful");
      })
      .catch((error) => {
        console.log("amjiltgui : " + error);
      })
      .finally(() => {
        this.setState({ loading: false });
        this.props.history.replace("/orders");
      });
  };
  render() {
    return (
      <div className={style.ContactData}>
        {this.state.loading ? (
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

export default withRouter(index);
