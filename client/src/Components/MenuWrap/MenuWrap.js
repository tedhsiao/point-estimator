import React, { Component } from "react";

let initialState = {
  hidden: false
};

class MenuWrap extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: "none" };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

export default MenuWrap;
