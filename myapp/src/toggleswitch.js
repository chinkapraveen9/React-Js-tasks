import React, { Component } from "react";

class Toggleswitch extends Component {
  constructor() {
    super();
    this.state = { a: "switchon", b: "turnedoff" };
  }

  macha = () => {
    this.setState((c) => ({
      a: c.a === "switchon" ? "switchoff" : "switchon",
      b: c.b === "turnedoff" ? "turnedon" : "turnedoff",
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.macha}>{this.state.a}</button>
        <button>{this.state.b}</button>
      </div>
    );
  }
}
export default Toggleswitch;
