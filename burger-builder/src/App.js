import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

// Use App JS with class based component
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
