import React from "react";
import styles from "./style.module.css";
const index = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.text} :</div>
      <button
        onClick={() => props.addIngredient(props.type)}
        className={styles.More}
      >
        add
      </button>
      <button
        className={styles.Less}
        onClick={() => props.removeIngredient(props.type)}
        disabled={props.disabled[props.type]}
      >
        remove
      </button>
    </div>
  );
};

export default index;
