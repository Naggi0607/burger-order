import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return (
    <div className={style.HamburgerMenu} onClick={props.toggleSidebar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default index;
