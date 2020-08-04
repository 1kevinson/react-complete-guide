import React from "react";

// Import CSS in js file to use it
import "./Person.css";

// PRESENTATION / DUMB COMPONENT / STATELESS
const person = (props) => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
