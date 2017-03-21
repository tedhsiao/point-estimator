import React, { Component } from "react";
import { Position, Toaster, Intent } from "@blueprintjs/core";
import { Button } from "../../stories/Button";

const TopRightToaster = Toaster.create({
  className: "my-toaster",
  position: Position.TOP_RIGHT
});

class ToasterDemo extends Component {
  constructor() {
    super();
  }

  _handleBlankToast() {
    TopRightToaster.show({ message: "Hello World" });
  }

  _handleConfirmToast() {
    TopRightToaster.show({
      intent: Intent.SUCCESS,
      iconName: "pt-icon-confirm",
      message: "Hello World"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._handleBlankToast}>Blank Toast</button>
        <button onClick={this._handleConfirmToast}>Confirm Toast</button>
      </div>
    );
  }
}

export default ToasterDemo;
