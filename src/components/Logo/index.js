import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import style from "./style.module.css";

const index = () => {
  return (
    <div className={style.Logo}>
      <img src={LogoImage} />
    </div>
  );
};

export default index;
