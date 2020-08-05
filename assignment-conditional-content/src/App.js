import React, { Component } from "react";

import Validation from "./Validation/Validation.js";
import Char from "./Char/Char.js";
import "./App.css";

class App extends Component {
  state = {
    inputData: "",
    inputDataLength: "",
  };

  inputTextHandler = (event) => {
    this.setState({
      inputData: event.target.value,
      inputDataLength: event.target.value.length,
    });
  };

  deleteChar = (index) => {
    const chars = [...this.state.inputData.split("")];
    chars.splice(index, 1);
    this.setState({
      inputData: chars.join(""),
      inputDataLength: chars.join("").length,
    });
  };

  render() {
    let charList = null;
    let charListArray = this.state.inputData.split("");

    charList = (
      <div>
        {charListArray.map((char, i) => {
          return (
            <Char
              click={() => {
                this.deleteChar(i);
              }}
              charEntered={char}
              key={i}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.inputTextHandler} />
        <hr />
        <Validation length={this.state.inputDataLength} />
        <hr />
        <h3>List Of Chars</h3>
        {charList}
      </div>
    );
  }
}

export default App;
