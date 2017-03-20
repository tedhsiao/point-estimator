import * as React from 'react';
import './QuestionForm.css';
import { Menu, MenuItem, Button } from '@blueprintjs/core';
import { map } from 'lodash';

class QuestionFormStates {
  static renderChoices(state, props) {
    return {
      showChoices: true
    }
  }
  static initialState(state, props) {
    return {
      showChoices: false,
      confirmed: false,
      questionString: "",
    }
  }
  static confirm(questionString) {
    return (state, props) => {
      return {
        confirmed: true,
        questionString,
      }
    }
  }
}

class QuestionForm extends React.Component {
  points = [1, 2, 3, 5];
  _input;

  constructor() {
    super();
    this.state = QuestionFormStates.initialState();
  }

  _handleInputClick(evt) {
  }

  _handleKeyEvent(evt) {
    const { which } = evt;
    // Keys === enter
    if (which === 13) {
      this.setState(QuestionFormStates.renderChoices);
    }
  }

  _handleConfirm() {
    this.setState(QuestionFormStates.confirm(this._input.value));
  }

  _reset() {
   this.setState(QuestionFormStates.initialState); 
  }

  _renderChoices(header) {
    if (this.state.showChoices) {
      return (
        <div>
          {this._renderHeader()}
          <Menu className="pt-menu text-center">
            {this._renderDefaultChoices(this.points)}
          </Menu>
          {this._renderButtons()}
        </div>
      )
    }
  }

  _renderButtons() {
    if (this.state.confirmed) {
      return (
        <Button text="Modify" onClick={this._reset.bind(this)}/>
      )
    } else {
      return (
        <div>
          <Button className="pt-intent-success" text="Confirm" onClick={this._handleConfirm.bind(this)}/>
          <Button text="Modify" onClick={this._reset.bind(this)}/>
        </div>
      )
    }
  }
  _renderHeader() {
    switch (this.state.confirmed) {
      case true:
        return <h3>{this.state.questionString}</h3>
      default:
        return <h3>Here are the choices:</h3>
    }

  }

  _renderDefaultChoices(values) {
    return map(values, (value) => <MenuItem className="pt-menu-item choice" text={value} key={value}/>)
  }

  _renderInput() {
    if (!this.state.confirmed) {
      return (
        <div>
          <span className="glyphicon glyphicon-pencil"></span>
          <input 
            placeholder="What's your question?"
            ref={(input) => this._input = input}
            onClick={this._handleInputClick}
            onKeyDown={this._handleKeyEvent.bind(this)}></input>
        </div>
      );
    } else {
      // placeholder for textinput
      return <div>
        <span className="glyphicon glyphicon-ok"></span>
        Current question is:
      </div>
    }
  }

  render() {
    return (
      <div className="question-form">
        {this._renderInput()}
        {this._renderChoices()}
      </div>
    );
  }
}

export default QuestionForm;