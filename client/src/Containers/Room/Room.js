import React, { Component } from "react";
import GuestList from "../../Components/GuestList/GuestList";
import "../../index.css";

class Room extends Component {
  getGuests() {
    let guests = [
      { name: "Alex", choice: "1 point" },
      { name: "Bob", choice: "2 points" },
      { name: "Carrie", choice: "3 points" }
    ];
    return guests;
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        <GuestList guests={this.getGuests()} />
      </div>
    );
  }
}

export default Room;
