import * as React from 'react';
import "./QuestionForm.css";
import { Menu, MenuItem } from '@blueprintjs/core';

class QuestionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showChoices: false
    }
  }

  handleClick(evt) {
  }
  handleKeyEvent(evt) {
    const { which } = evt;
    // Keys === enter
    if (which === 13) {
      console.log('entered');
      this.setState(QuestionFormStates.renderChoices);
    }
  }
  renderChoices() {
    if (this.state.showChoices) {
      return (
        <Menu className="pt-menu">
          <MenuItem className="pt-menu-item" text="1" />
          <MenuItem className="pt-menu-item" text="2" />
          <MenuItem className="pt-menu-item" text="3" />
          <MenuItem className="pt-menu-item" text="5" />
        </Menu>
      )
    }
  }
  render() {
    return (
      <div>
        <input 
          placeholder="What's your question?"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyEvent.bind(this)}></input>
          {this.renderChoices()}
      </div>
    );
  }
}

class QuestionFormStates {
  static renderChoices(state, props) {
    return {
      showChoices: true
    }
  }
}

export default QuestionForm;