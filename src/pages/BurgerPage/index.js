import React, { Component } from "react";
import styles from "./style.module.css";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios_orders";
import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

const INGREDIENT_PRICE = { salad: 1, cheese: 1.5, meat: 3, bacon: 1 };
const INGREDIENT_NAMES = {
  bacon: "Bacon",
  cheese: "Cheese",
  meat: "Meat",
  salad: "Salad",
};
class index extends Component {
  state = {
    purchasing: false,
    confirmOrder: false,
    loading: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  hideConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continueOrder = () => {
    const params = [];
    for (let ingredients in this.props.burgerIngredients) {
      params.push(
        ingredients + "=" + this.props.burgerIngredients[ingredients]
      );
    }
    params.push("price=" + this.props.price);
    const query = params.join("&");
    console.log(query);
    this.props.history.push({ pathname: "/ship", search: query });
    this.hideConfirmModal();
  };

  render() {
    const disabledIngredient = { ...this.props.burgerIngredients };

    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }

    return (
      <div>
        <Modal show={this.state.confirmOrder} hide={this.hideConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.hideConfirmModal}
              onConfirm={this.continueOrder}
              ingredients={this.props.burgerIngredients}
              ingredientNames={INGREDIENT_NAMES}
              totalPrice={this.props.price}
            />
          )}
        </Modal>
        <Burger ingredients={this.props.burgerIngredients} />
        <BuildControls
          disabled={!this.state.purchasing}
          disabledIngredient={disabledIngredient}
          addIngredient={this.props.addIngredient}
          removeIngredient={this.props.removeIngredient}
          totalPrice={this.props.price}
          ingredientNames={INGREDIENT_NAMES}
          showConfirmModal={this.showConfirmModal}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredient) => dispatch(actions.addIngredient(ingredient)),
    removeIngredient: (ingredient) =>
      dispatch(actions.removeIngredient(ingredient)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
