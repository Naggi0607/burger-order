import React from "react";
import style from "./style.module.css";
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
      <p>continue</p>
    </div>
  );
};

export default index;
