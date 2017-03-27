import React, { Component } from "react";
import QuestionForm from "../../Components/QuestionForm/QuestionForm";
import { Button } from "@blueprintjs/core";
import "../../index.css";

class CreateRoom extends Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-5 col-md-2 text-center top-offset">
          <Button text="Create a Question" className="pt-intent-primary" />
          <QuestionForm />
        </div>
      </div>
    );
  }
}

export default CreateRoom;
