import React from "react";
import Person from "./Person/Person";

// props is use to retrieve attributes define in the root file
const persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => {
          props.changed(event, person.id);
        }}
      />
    );
  });
};

export default persons;
