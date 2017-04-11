import React, { Component } from "react";
import { connect } from "react-redux";
import Signin from "../../Components/Signin/Signin";
import "../../index.css";
import GoogleLogin from "react-google-login";
import { fetchData } from "../../Actions/UserActions";

function mapDispatchToProps(dispatch) {
  return {
    onGoogleLoginSuccess: payload => {
      dispatch(fetchData("/api/user/create", payload));
    }
  };
}

class Lobby extends Component {
  constructor(props, state) {
    super();
    this.props = props;
  }
  successResGoogle(res) {
    console.log(res.profileObj);
    let { name, email, googleId } = res.profileObj;
    let payload = {
      name,
      email,
      googleId
    };
    this.props.onGoogleLoginSuccess(payload);
  }
  failResGoogle(res) {
    console.log(res);
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        <GoogleLogin
          clientId="756264480073-sre4v4ht6n1spc645h8p5dsji0efrkcb.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={this.successResGoogle.bind(this)}
          onFailure={this.failResGoogle}
        />
        <Signin />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Lobby);
