/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import logo from "./logo.svg";
import CSVReader from "react-csv-reader";
import { Column, Row } from "simple-flexbox";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    isUploaded: false,
    isValid: false
  };

  logName = () => {
    // do whatever with the names ... let's just log them here
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };
  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };

  csvUpload = data => {
    console.log(data);
    this.setState({
      isUploaded: true
    });
    console.log(this.state);
  };

  render() {
    return (
      <Column flexGrow={1} style={{ "padding-top": "25px" }}>
        <Row horizontal="center">
          <img
            src="https://branch.io/img/logo-dark.svg"
            style={{ height: "100px", "padding-right": "50px" }}
          />
          <img src={logo} style={{ height: "100px" }} />
        </Row>
        <Row horizontal="center">
          <h1>Target QR Code Creator</h1>
        </Row>
        <Row horizontal="center">
          <CSVReader
            cssClass="react-csv-input"
            label="Choose a file "
            onFileLoaded={this.csvUpload}
          />
        </Row>
      </Column>
    );
  }
}

export default App;
