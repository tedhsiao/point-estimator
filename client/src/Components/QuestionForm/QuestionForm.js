import * as React from "react";
import "./QuestionForm.css";
import { Menu, Button } from "@blueprintjs/core";

class QuestionFormStates {
  static renderChoices(state, props) {
    return {
      showChoices: true
    };
  }
  static initialState(state, props) {
    return {
      showChoices: false,
      confirmed: false,
      questionString: "",
      choice_1: "",
      choice_2: "",
      choice_3: "",
      choice_4: ""
    };
  }
  static confirm(questionString) {
    return (state, props) => {
      return {
        confirmed: true,
        questionString
      };
    };
  }
}

class QuestionForm extends React.Component {
  points = [1, 2, 3, 4];
  _input;

  constructor() {
    super();
    this.state = QuestionFormStates.initialState();
  }

  _handleInputClick(evt) {}

  _handleKeyEvent(evt) {
    const { which } = evt;
    // Keys === enter
    if (which === 13) {
      this.setState(QuestionFormStates.renderChoices);
    }
  }

  _handleChoicesChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  _handleConfirm() {
    this.setState(QuestionFormStates.confirm(this._input.value));
  }

  _reset() {
    this.setState(QuestionFormStates.initialState);
  }

  _submitForm() {
    const formInputs = {
      questionString: this.state.questionString,
      choice_1: this.state.choice_1,
      choice_2: this.state.choice_2,
      choice_3: this.state.choice_3,
      choice_4: this.state.choice_4
    };
    console.log(formInputs);
    this.props.submitFormFunc(formInputs);
  }

  _renderChoices(header) {
    if (this.state.showChoices && !this.state.confirmed) {
      return (
        <div>
          {this._renderHeader()}
          <Menu className="pt-menu text-center">
            {this._renderInputChoices(this.points)}
          </Menu>
          {this._renderButtons()}
        </div>
      );
    } else if (this.state.showChoices && this.state.confirmed) {
      const choices = [
        this.state.choice_1,
        this.state.choice_2,
        this.state.choice_3,
        this.state.choice_4
      ];
      return (
        <div>
          {this._renderHeader()}
          <Menu className="pt-menu text-center">
            {this._renderConfirmedChoices(choices)}
          </Menu>
          {this._renderButtons()}
        </div>
      );
    }
  }

  _renderButtons() {
    if (this.state.confirmed) {
      return (
        <div>
          <Button text="Reset" onClick={this._reset.bind(this)} />
          <Button text="Create Room" onClick={this._submitForm.bind(this)} />
        </div>
      );
    } else {
      return (
        <div>
          <Button
            className="pt-intent-success"
            text="Confirm"
            onClick={this._handleConfirm.bind(this)}
          />
          <Button text="Modify" onClick={this._reset.bind(this)} />
        </div>
      );
    }
  }
  _renderHeader() {
    switch (this.state.confirmed) {
      case true:
        return <h3>{this.state.questionString}</h3>;
      default:
        return <h3>Here are the choices:</h3>;
    }
  }

  _renderInputChoices(values) {
    return values.map((value, i) => (
      <input
        type="text"
        dir="auto"
        className="pt-input choice col-md-12"
        value={this.state["choice_" + (i + 1)]}
        name={"choice_" + (i + 1)}
        onChange={this._handleChoicesChange.bind(this)}
        key={value}
      />
    ));
  }

  _renderConfirmedChoices(choices) {
    return choices.map((choice, i) => (
      <div className="confirmed-choices" key={i}>{choice}</div>
    ));
  }

  _renderInput() {
    if (!this.state.confirmed) {
      return (
        <div>
          <span className="glyphicon glyphicon-pencil" />
          <input
            placeholder="What's your question?"
            ref={input => this._input = input}
            onClick={this._handleInputClick.bind(this)}
            onKeyDown={this._handleKeyEvent.bind(this)}
          />
        </div>
      );
    } else {
      // placeholder for textinput
      return (
        <div>
          <span className="glyphicon glyphicon-ok" />
          {this.state.questionString}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="question-form">
        {this._renderInput()}
        {this._renderChoices.call(this)}
      </div>
    );
  }
}

QuestionForm.propTypes = {
  submitFormFunc: React.PropTypes.func
};

export default QuestionForm;
