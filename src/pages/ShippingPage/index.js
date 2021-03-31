import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import style from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
const Index = (props) => {
  const goBack = () => {
    props.history.goBack();
  };

  const showContactData = () => {
    props.history.replace("/ship/contact");
  };
  return (
    <div className={style.ShippingPage}>
      <p style={{ fontSize: "20px" }}>
        <strong>Your orders : ${props.price}</strong>
      </p>
      <Burger ingredients={props.burgerIngredients} />
      <Button onClicked={goBack} btnType="Danger" text="CANCEL ORDER" />
      <Button onClicked={showContactData} btnType="Success" text="CONTACT" />

      <Route path="/ship/contact">
        <ContactData />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgerIngredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(Index);
