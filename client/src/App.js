import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Link, Route } from "react-router-dom";
import Radium from "radium";
import MenuWrap from "./Components/MenuWrap/MenuWrap";
import BurgerMenu from "react-burger-menu";
import CreateRoom from "./Containers/CreateRoom/CreateRoom";
import Lobby from "./Containers/Lobby/Lobby";
import Room from "./Containers/Room/Room";
import socketEvents from "./SocketHandler";
import GoogleLogin from "react-google-login";
import { fetchData, logout } from "./Actions/UserActions";

socketEvents();

const Menu = BurgerMenu["slide"];
const RadiumLink = Radium(Link);

let mapDispatchToProps = dispatch => {
  return {
    onGoogleLoginSuccess: payload => {
      dispatch(fetchData("/api/user/create", payload));
    },
    handleLogout: () => {
      dispatch(logout());
    }
  };
};

let mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

class App extends Component {
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
  logoutButton() {
    if (!this.props.user) return;
    return <button onClick={this.props.handleLogout}>Log Out</button>;
  }
  googleLoginButton() {
    if (this.props.user) return;
    return (
      <GoogleLogin
        clientId="756264480073-sre4v4ht6n1spc645h8p5dsji0efrkcb.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={this.successResGoogle.bind(this)}
        onFailure={this.failResGoogle}
      />
    );
  }
  getItem() {
    let routes;
    if (!this.props.user) {
      routes = [
        { Home: "/lobby" },
        { Room: "/room" },
        { CreateRoom: "/create-room" }
      ];
    } else {
      routes = [{ Home: "/" }, { Room: "/room" }];
    }
    let items = routes.map((route, i) => {
      return Object.keys(route).map(key => {
        return <RadiumLink key={i} to={route[key]}>{key}</RadiumLink>;
      })[0];
    });
    return items;
  }
  getMenu() {
    const items = this.getItem();

    return (
      <MenuWrap wait={20}>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          {items}
          {this.googleLoginButton()}
          {this.logoutButton()}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <div id="outer-container" style={{ height: "100%" }}>
        {this.getMenu()}
        <Route path="/lobby" component={Lobby} />
        <Route path="/room" component={Room} />
        <Route path="/create-room" component={CreateRoom} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
