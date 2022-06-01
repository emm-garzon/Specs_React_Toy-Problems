import React, { Component } from "react";

class FilterObject extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy",
          age: "25",
        },
        {
          name: "Susan",
          age: "23",
        },
        {
          name: "Allen",
          hair: "curly",
        },
      ],
      userInput: "",
      filteredEmployees: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredEmployees)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
