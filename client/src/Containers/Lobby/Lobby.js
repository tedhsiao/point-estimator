import React, { Component } from "react";
import Signin from "../../Components/Signin/Signin";
import "../../index.css";

class Lobby extends Component {
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        <Signin />
      </div>
    );
  }
}

export default Lobby;
