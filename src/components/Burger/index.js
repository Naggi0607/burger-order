import React from "react";
import styles from "./style.module.css";
import { connect } from "react-redux";
import BurgerIngredient from "../BurgerIngredient";

const index = (props) => {
  const items = Object.entries(props.ingredients);
  let content = [];
  items.map((el, index) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${index}${i}`} type={el[0]} />);
  });

  if (content.length == 0) content = <p>Select burger ingredients...</p>;
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(index);
