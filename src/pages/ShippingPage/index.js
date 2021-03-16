import React, { Component } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
export default class index extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      console.log(param[0]);

      if (param[0] !== "price") ingredients[param[0]] = param[1];
      else price = param[1];
    }

    this.setState({ ingredients, price });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={style.ShippingPage}>
        <p style={{ fontSize: "20px" }}>
          <strong>Your orders : ${this.state.price}</strong>
        </p>
        <Burger ingredients={this.state.ingredients} />
        <Button onClicked={this.goBack} btnType="Danger" text="CANCEL ORDER" />
        <Button
          onClicked={this.showContactData}
          btnType="Success"
          text="CONTACT"
        />

        <Route path="/ship/contact">
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Route>
      </div>
    );
  }
}
