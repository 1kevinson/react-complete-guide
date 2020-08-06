import React, { Component } from "react";

// Hack the webpack to use CSS modules
import classes from "./App.css";

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showpPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
