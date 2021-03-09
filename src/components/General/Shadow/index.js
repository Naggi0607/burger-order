import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return props.show ? (
    <div onClick={props.hide} className={style.Shadow}></div>
  ) : null;
};

export default index;
