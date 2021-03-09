import React from "react";
import style from "./style.module.css";
import Button from "../General/Button";
const index = (props) => {
  return (
    <div>
      <h3>Your orders</h3>
      <p>your ingredients : </p>
      <ul>
        {Object.keys(props.ingredients).map((el, index) => (
          <li key={index}>
            {props.ingredientNames[el]}:{props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Price : ${props.totalPrice}</strong>
      </p>
      <Button onClicked={props.onConfirm} btnType="Success" text="CONFIRM" />
      <Button onClicked={props.onCancel} btnType="Danger" text="CANCEL" />
    </div>
  );
};

export default index;
