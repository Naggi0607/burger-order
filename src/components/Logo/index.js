import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className={style.Logo}>
      <Link to="/">
        <img src={LogoImage} />
      </Link>
    </div>
  );
};

export default index;
