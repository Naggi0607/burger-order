import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import style from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
class index extends Component {
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
          <strong>Your orders : ${this.props.price}</strong>
        </p>
        <Burger ingredients={this.props.burgerIngredients} />
        <Button onClicked={this.goBack} btnType="Danger" text="CANCEL ORDER" />
        <Button
          onClicked={this.showContactData}
          btnType="Success"
          text="CONTACT"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgerIngredients: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(index);
