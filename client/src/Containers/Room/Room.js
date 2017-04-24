import React, { Component } from "react";
import { connect } from "react-redux";
import GuestList from "../../Components/GuestList/GuestList";
import { getRoomInfo } from "../../Actions/RoomActions";
import "../../index.css";

let mapStateToProps = state => {
  return {
    id: state.room.id,
    question: state.room.question,
    choices: state.room.choices
  };
};

let mapDispatchToProps = dispatch => {
  return {
    handleGetRoomInfo: function() {
      dispatch(getRoomInfo(1));
    }
  };
};

class Room extends Component {
  componentDidMount() {
    this.props.handleGetRoomInfo();
  }
  getGuests() {
    let guests = [
      { name: "Alex", choice: "1 point" },
      { name: "Bob", choice: "2 points" },
      { name: "Carrie", choice: "3 points" }
    ];
    return guests;
  }
  _renderChoices() {
    if (Array.isArray(this.props.choices)) {
      return this.props.choices.map((choice, i) => (
        <p>Choice {i + 1}: {choice}</p>
      ));
    }
    return;
  }
  _renderQuestion() {
    if (this.props.question) {
      return <h3>Question: {this.props.question}</h3>;
    }
    return;
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4 text-center top-offset ">
        {this._renderQuestion()}
        {this._renderChoices()}
        <GuestList guests={this.getGuests.call(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
