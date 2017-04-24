import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionForm from "../../Components/QuestionForm/QuestionForm";
import "../../index.css";
import { createRoom } from "../../Actions/RoomActions";
import { history } from "../../index";

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    onCreateRoom: payload => {
      history.push("/room");
      dispatch(createRoom("/api/room", payload));
    }
  };
};

class CreateRoom extends Component {
  _handleFormSubmit(formInputs) {
    this.props.onCreateRoom(formInputs);
  }
  render() {
    return (
      <div>
        <div className="col-md-offset-5 col-md-2 text-center top-offset">
          <QuestionForm submitFormFunc={this._handleFormSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
