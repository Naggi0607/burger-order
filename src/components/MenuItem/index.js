import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
const index = (props) => {
  return (
    <li className={style.MenuItem}>
      <NavLink
        exact={props.exact}
        activeClassName={style.active}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default index;
