import React, { Component } from "react";
import Signin from "../../Components/Signin/Signin";
import "../../index.css";
import GoogleLogin from "react-google-login";

class Lobby extends Component {
  successResGoogle(res) {
    console.log(res.profileObj);
  }
  failResGoogle(res) {
    console.log(res.profileObj);
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        <GoogleLogin
          clientId="756264480073-sre4v4ht6n1spc645h8p5dsji0efrkcb.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={this.successResGoogle}
          onFailure={this.failResGoogle}
        />
        <Signin />
      </div>
    );
  }
}

export default Lobby;
