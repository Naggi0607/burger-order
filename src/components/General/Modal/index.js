import React from "react";
import style from "./style.module.css";
import Shadow from "../Shadow";
const index = (props) => {
  return (
    <div>
      <Shadow show={props.show} hide={props.hide} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={style.Modal}
      >
        {props.children}
      </div>
    </div>
  );
};

export default index;
