import React from "react";

import Aux from "../../hoc/Aux";

// Functional Component to return the layout
const layout = (props) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
