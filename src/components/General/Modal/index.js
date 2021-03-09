import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return (
    <div
      onClick={props.hide}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={style.Modal}
    >
      {props.children}
    </div>
  );
};

export default index;
