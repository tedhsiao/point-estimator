import React, { Component } from "react";
import "./App.css";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "@blueprintjs/core";
import QuestionForm from "./Components/QuestionForm/QuestionForm";
import { Link } from "react-router-dom";
import Radium from "radium";
import MenuWrap from "./Components/MenuWrap/MenuWrap";
import BurgerMenu from "react-burger-menu";

const Menu = BurgerMenu["slide"];
const RadiumLink = Radium(Link);

class App extends Component {
  getItem() {
    let routes = [{ Home: "/" }, { Room: "/room" }, { Profile: "/profile" }];
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
      <div id="outer-container" style={{ height: "100%" }}>
        {this.getMenu()}
        <main id="page-wrap">
          <div className="App">
            {this.getMenu()}
            <Button text="Create a Question" className="pt-intent-primary" />
            <QuestionForm />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
