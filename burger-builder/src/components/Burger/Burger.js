import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // Convert an Object into Array and map into key, values ingredients
  const transformedIngredients = Object.keys(props.ingredients).map(
    (ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((dumb, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    }
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
