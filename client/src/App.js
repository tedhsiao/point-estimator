import React, { Component } from "react";
import "./App.css";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Radium from "radium";
import MenuWrap from "./Components/MenuWrap/MenuWrap";
import BurgerMenu from "react-burger-menu";
import CreateRoom from "./Containers/CreateRoom/CreateRoom";
import Lobby from "./Containers/Lobby/Lobby";
import Room from "./Containers/Room/Room";
import socketEvents from "./SocketHandler";

socketEvents();

const Menu = BurgerMenu["slide"];
const RadiumLink = Radium(Link);

class App extends Component {
  getItem() {
    let routes = [
      { Home: "/" },
      { Room: "/room" },
      { CreateRoom: "/create-room" }
    ];
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
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <Router>
        <div id="outer-container" style={{ height: "100%" }}>
          {this.getMenu()}
          <Route exact path="/" component={Lobby} />
          <Route path="/room" component={Room} />
          <Route path="/create-room" component={CreateRoom} />
        </div>
      </Router>
    );
  }
}

export default App;
