import React, { Component } from "react";
import "./App.css";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "@blueprintjs/core";
import QuestionForm from "./Components/QuestionForm/QuestionForm";
import BurgerMenu from "react-burger-menu";
import { Link } from "react-router-dom";
import Radium from "radium";

const Menu = BurgerMenu["slide"];

let MenuWrap = React.createClass({
  getInitialState() {
    return { hidden: false };
  },

  show() {
    this.setState({ hidden: false });
  },

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
});

let RadiumLink = Radium(Link);

class App extends Component {
  changeMenu(menu) {
    this.setState({ currentMenu: menu });
  }
  getItem() {
    let items = [
      <RadiumLink to="/">Home</RadiumLink>,
      <RadiumLink to="/room">Room</RadiumLink>,
      <RadiumLink to="/profile">Profile</RadiumLink>
    ];
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
