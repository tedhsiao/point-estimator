import * as React from "react";
import "./Nav.css";

class NavStates {
  static initialState(state, props) {
    return {
      appName: "Point Estimator"
    };
  }
}

class Nav extends React.Component {
  constructor() {
    super();
    this.state = NavStates.initialState();
  }

  render() {
    return (
      <nav className="pt-navbar pt-dark .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">{this.state.appName}</div>
          <button className="pt-button pt-minimal pt-icon-home">Home</button>
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

export default Nav;
