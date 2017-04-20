import React from "react";
import { Button, EditableText } from "@blueprintjs/core";

class Signin extends React.Component {
  render() {
    return (
      <div className="pt-control-group pt-vertical" style={{ width: "500px" }}>
        <div className="pt-input-group pt-large">
          <EditableText className="pt-input" placeholder="Room Number" />
        </div>
        <div className="pt-input-group pt-large">
          <EditableText className="pt-input" placeholder="Name" />
        </div>
        <Button
          className="pt-button pt-large pt-intent-primary"
          text="Submit"
          onClick={this.props.submitFunc}
        />
      </div>
    );
  }
}

Signin.propTypes = {
  submitFunc: React.PropTypes.func
};

export default Signin;
