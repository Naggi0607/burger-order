import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return (
    <div className={style.Order}>
      <p>
        Name :{" "}
        <strong>{props.Order.address ? props.Order.address.name : null}</strong>
      </p>
      <p>
        Ingredients : Bacon : {props.Order.ingredients.bacon}, Meat :
        {props.Order.ingredients.meat}, Cheese :{props.Order.ingredients.cheese}
        , Salad : {props.Order.ingredients.salad}
      </p>
      <p>Address :{props.Order.address ? props.Order.address.address : null}</p>
      <p>
        Price : <strong>${props.Order.price}</strong>
      </p>
    </div>
  );
};

export default index;
