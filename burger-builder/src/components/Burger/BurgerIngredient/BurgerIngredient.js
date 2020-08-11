import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    // Inside a class based component we access the props with (this.props)
    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className={classes.BreadBottom}>
            <div className={classes.Seeds1}> </div>
            <div className={classes.Seeds2}> </div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

// Validating the props
// If we try to use ingredient component without passing the type we will get an Error
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
