import React, { Component } from "react";
import Signin from "../../Components/Signin/Signin";
import "../../index.css";

class Lobby extends Component {
  constructor(props, state) {
    super();
    this.props = props;
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        <Signin />
      </div>
    );
  }
}

export default Lobby;
