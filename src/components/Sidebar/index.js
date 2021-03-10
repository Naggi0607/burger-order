import React from "react";
import style from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";
const index = (props) => {
  let classes = [style.Sidebar, style.Close];
  if (props.showSidebar) {
    classes = [style.Sidebar, style.Open];
  }
  return (
    <div>
      <Shadow show={props.showSidebar} hide={props.toggleSidebar} />
      <div className={classes.join(" ")}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default index;
