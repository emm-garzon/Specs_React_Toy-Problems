import React, { Component } from "react";

class Sum extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      sum: null,
    };
  }

  updateNumber1(val) {
    this.setState({ num1: +val });
  }

  updateNumber2(val) {
    this.setState({ num2: +val });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.updateNumber1(e.target.value)}
        />
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.updateNumber2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.num1, this.state.num2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
