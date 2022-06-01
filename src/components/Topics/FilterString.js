import React, { Component } from "react";

class FilterString extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ["Mark", "Gerard", "Ron", "Alex"],
      userInput: "",
      filteredNames: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }
    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.names)}{" "}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames)}{" "}
        </span>
      </div>
    );
  }
}
export default FilterString;
