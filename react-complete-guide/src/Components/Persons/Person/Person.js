import React from "react";

// CSS Modules is better approach to work with Javascript
import classes from "./Person.css";

// props is use to bind attribute define in App.js
const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
