import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput.js";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userOutput: [
      {
        number: Math.floor(Math.random() * 24),
        username: "Kevin",
      },
    ],
    userInput: [{ job: "Developer" }],
  };

  jobHandler = (event) => {
    this.setState({
      userOutput: [
        {
          number: Math.floor(Math.random() * 24),
          username: "Kevin",
        },
      ],
      userInput: [{ job: event.target.value }],
    });
    console.log(event);
  };

  render() {
    return (
      <div className="App">
        <UserOutput
          name={this.state.userOutput[0].username}
          job={this.state.userInput[0].job}
        />
        <UserInput
          changed={this.jobHandler}
          job={this.state.userInput[0].job}
        />
      </div>
    );
  }
}

export default App;
