import React, { Component } from "react";

// Hack the webpack to use CSS modules
import classes from "./App.css";

import Person from "../Components/Persons/Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { id: "sd4sd5", name: "Kev", age: 26 },
      { id: "de8ds3", name: "Manu", age: 26 },
      { id: "vf9gn2", name: "Stephanie", age: 27 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 24 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //Copy of the object
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const nPersons = [...this.state.persons];
    nPersons[personIndex] = person;

    this.setState({
      persons: nPersons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // Built-in function to change state data
    this.setState({
      persons: persons,
    });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // age is a props
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => {
                  this.nameChangeHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1> Hi, react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );

    // Javascript above it's get compiled to this code
    /*    return React.createElement("div",null,React.createElement("h1", { className: "App" }, "React App") );*/
  }
}

export default App;
