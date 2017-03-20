import React, { Component, PropTypes } from "react";
import NavTab from "../NavTab/NavTab";
import "./Nav.css";

const propTypes = {
  tabClicked: PropTypes.string
};

class NavStates {
  static initialState(state, props) {
    return {
      appName: "Point Estimator",
      activeTab: "Home"
    };
  }
  static tabClickedState(tabClicked) {
    return (state, props) => ({
      activeTab: tabClicked
    });
  }
}

class Nav extends React.Component {
  constructor() {
    super();
    this.state = NavStates.initialState();
  }

  _handleTabClick(tabClicked) {
    this.setState(NavStates.tabClickedState(tabClicked));
  }

  _renderNavTabs() {
    let tabs = ["Home", "Room"];
    return tabs.map(tab => {
      return (
        <NavTab
          buttonText={tab}
          buttonIcon="pt-icon-home"
          active={this.state.activeTab == tab}
          onClick={this._handleTabClick.bind(this, tab)}
        />
      );
    });
  }

  render() {
    return (
      <nav className="pt-navbar pt-dark .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">{this.state.appName}</div>
          {this._renderNavTabs()}
        </div>
        <div className="pt-navbar-group pt-align-right">
          <span className="pt-navbar-divider" />
          <button className="pt-button pt-minimal pt-icon-user" />
          <button className="pt-button pt-minimal pt-icon-notifications" />
          <button className="pt-button pt-minimal pt-icon-cog" />
        </div>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;
