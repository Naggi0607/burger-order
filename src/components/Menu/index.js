import React from "react";
import style from "./style.module.css";
import MenuItem from "../MenuItem";
const index = () => {
  return (
    <div>
      <ul className={style.Menu}>
        <MenuItem link="/orders">Orders</MenuItem>
        <MenuItem exact link="/">
          Login
        </MenuItem>
      </ul>
    </div>
  );
};

export default index;
