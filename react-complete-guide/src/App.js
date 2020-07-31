
import React, { Component } from "react";
import "./App.css";

// The import name should start with uppercase character
import Person from "./Person/Person.js";

class App extends Component {
    state = {
        persons: [
            { name: "Kev", age: 26 },
            { name: "Manu", age: 26 },
            { name: "Stephanie", age: 27 },
        ],
        otherState: "some other value",
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: "Kevin", age: 26 },
                { name: "Manu", age: 26 },
                { name: "Stephanie", age: 24 },
            ],
        });
    };

    render() {
        return (
            <div className="App">
                <h1> Hi, react app</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );

        // Javascript above it's get compiled to this code
        /*    return React.createElement("div",null,React.createElement("h1", { className: "App" }, "React App") );*/
    }
}

export default App;
