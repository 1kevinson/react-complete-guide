import React from "react";

// PRESENTATION / DUMB COMPONENT / STATELESS
const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
