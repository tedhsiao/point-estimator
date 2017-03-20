import React, { Component } from "react";
import "./App.css";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Menu, MenuItem, Button } from "@blueprintjs/core";
import QuestionForm from "./Components/QuestionForm/QuestionForm";
import Nav from "./Components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav tabs={["Home", "Room"]} />
        <Menu className="default pt-dark">
          <MenuItem text="Vote" />
          <MenuItem text="My Account" />
          <MenuItem text="Logout" />
        </Menu>
        <Button text="Create a Question" className="pt-intent-primary" />
        <QuestionForm />
      </div>
    );
  }
}

export default App;
