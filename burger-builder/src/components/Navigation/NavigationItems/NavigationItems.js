import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
