import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return (
    <button
      onClick={props.onClicked}
      className={`${style.Button} ${style[props.btnType]}`}
    >
      {props.text}
    </button>
  );
};

export default index;
