import React, { Component } from "react";
import "./App.css";

// The import name should start with uppercase character
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    // Javascript Code
    return (
      <div className="App">
        <h1> Hi, react app</h1>
        <p>This is really working!</p>
        <Person />
        <Person />
        <Person />
      </div>
    );

    // Javascript above it's get compiled to this code
    /*    return React.createElement("div",null,React.createElement("h1", { className: "App" }, "React App") );*/
  }
}

export default App;
