import React from "react";

import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

// Functional Component to return the layout
const layout = (props) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
