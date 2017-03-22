import React, { Component, PropTypes } from "react";

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

class NavTab extends Component {
  _activeClass() {
    return this.props.active ? "active-color" : "";
  }

  render() {
    return (
      <button
        className={
          `pt-button pt-minimal ${this.props.buttonIcon} ${this._activeClass()}`
        }
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

NavTab.propTypes = propTypes;

export default NavTab;
