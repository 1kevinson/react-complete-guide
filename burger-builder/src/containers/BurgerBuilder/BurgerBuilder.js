/**
 * @CLASS_BASED_COMPONENT
 * Prefer use the class based component to manage the state of the application
 */

import React, { Component } from "react";

import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
