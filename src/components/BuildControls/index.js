import React from "react";
import styles from "./style.module.css";
import BuildControl from "../BuildControl";
const index = (props) => {
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
          disabled={props.disabledIngredient}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={styles.OrderButton}
      >
        Order
      </button>
    </div>
  );
};

export default index;
