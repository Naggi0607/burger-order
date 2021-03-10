import React from "react";
import style from "./style.module.css";
import MenuItem from "../MenuItem";
const index = () => {
  return (
    <div>
      <ul className={style.Menu}>
        <MenuItem active link="/">
          Order
        </MenuItem>
        <MenuItem link="/login">Login</MenuItem>
      </ul>
    </div>
  );
};

export default index;
