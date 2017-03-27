import React from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

class GuestList extends React.Component {
  _renderGuests() {
    if (this.props.guests.length) {
      return this.props.guests.map((guest, i) => (
        <MenuItem
          key={`${guest.name}-${guest.i}`}
          text={guest.name}
          label={guest.choice}
        />
      ));
    } else {
      return <MenuItem text="No one else has joined yet" />;
    }
  }

  render() {
    return (
      <Menu>
        <MenuDivider title="Guests" />
        {this._renderGuests()}
      </Menu>
    );
  }
}

GuestList.propTypes = {
  guests: React.PropTypes.array
};

export default GuestList;
