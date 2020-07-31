import React, { Component, useState } from "react";
import "./App.css";

// The import name should start with uppercase character
import Person from "./Person/Person.js";

// REACT HOOKS
const app = (props) => {
  // useState always return an array with two elements
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kev", age: 26 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 27 },
    ],
  });

  const [otherState, setOtherState] = useState("Some other value");
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      // Not merge with the old state, it replace it
      persons: [
        { name: "Kevin", age: 26 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 24 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1> Hi, react app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  // Javascript above it's get compiled to this code
  /*    return React.createElement("div",null,React.createElement("h1", { className: "App" }, "React App") );*/
};

export default app;
