import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

import styles from "./style.module.css";
import BuildControl from "../BuildControl";
const index = (props) => {
  const disabledIngredient = { ...props.burgerIngredients };

  for (let key in disabledIngredient) {
    disabledIngredient[key] = disabledIngredient[key] <= 0;
  }
  return (
    <div className={styles.BuildControls}>
      <p>
        Burger price : <strong>${props.totalPrice}</strong>
      </p>
      {Object.keys(props.ingredientNames).map((el, index) => (
        <BuildControl
          key={index}
          type={el}
          text={props.ingredientNames[el]}
          disabled={disabledIngredient}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={styles.OrderButton}
      >
        Order
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgerIngredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
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
