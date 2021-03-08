import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return <div className={style.Modal}>{props.children}</div>;
};

export default index;
