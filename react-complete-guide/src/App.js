import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // Javascript Code
    return (
      <div className="App">
        <h1> Hi, react app</h1>
      </div>
    );

    // Javascript above it's get compiled to this code
    /*    return React.createElement("div",null,React.createElement("h1", { className: "App" }, "React App") );*/
  }
}

export default App;
