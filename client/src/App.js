import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@blueprintjs/core/dist/blueprint.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Menu, MenuItem, Button, Spinner, Intent } from '@blueprintjs/core';
import QuestionForm from './Components/QuestionForm/QuestionForm'

class App extends Component {
  render() {
    return (
      <div className="App">
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
