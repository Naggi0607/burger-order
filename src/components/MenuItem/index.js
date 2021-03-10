import React from "react";
import style from "./style.module.css";
const index = (props) => {
  return (
    <li className={style.MenuItem}>
      <a className={props.active ? style.active : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default index;
