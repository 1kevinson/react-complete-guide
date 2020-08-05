import React from "react";

// Import CSS in js file to use it
import "./Person.css";
import Radium, { StyleRoot } from "radium";

// PRESENTATION / DUMB COMPONENT / STATELESS
const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "40%",
    },
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
