import React from "react";
import style from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Sidebar from "../Sidebar";
import HamburgerMenu from "../HamburgerMenu";
const index = (props) => {
  return (
    <header className={style.Toolbar}>
      <HamburgerMenu toggleSidebar={props.toggleSidebar} />
      <Logo />
      <nav className={style.HideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
};

export default index;
