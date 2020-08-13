import React from "react";
import menuLogo from "../../../assets/images/menu.png";

import classes from "./Menu.css";

const menu = (props) => {
  return (
    <div className={classes.Menu} onClick={props.clicked}>
      <img src={menuLogo} alt="menu" />
    </div>
  );
};

export default menu;
