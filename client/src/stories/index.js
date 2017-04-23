import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Button from "./Button";
import Welcome from "./Welcome";
import QuestionForm from "../Components/QuestionForm/QuestionForm";
import Nav from "../Components/Nav/Nav";
import NavTab from "../Components/NavTab/NavTab";
import ToasterDemo from "../Components/Toaster/ToasterDemo";
import GuestList from "../Components/GuestList/GuestList";
import PollChart from "../Components/PollChart/PollChart";
import Signin from "../Components/Signin/Signin";
import "@blueprintjs/core/dist/blueprint.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { sum } from "lodash";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("QuestionForm", module).add("default", () => (
  <QuestionForm submitFormFunc={inputs => {}} />
));

storiesOf("Nav", module).add("default", () => <Nav tabs={["Home", "Room"]} />);

storiesOf("NavTab", module).add("default", () => (
  <NavTab
    buttonText="Home"
    buttonIcon="pt-icon-home"
    active={false}
    onClick={() => {
      console.log("Clicked");
    }}
  />
));

storiesOf("ToasterDemo", module).add("default", () => <ToasterDemo />);

storiesOf("GuestList", module)
  .add("with guests", () => {
    let guests = [
      { name: "Alex", choice: "1 point" },
      { name: "Bob", choice: "2 points" },
      { name: "Carrie", choice: "3 points" }
    ];
    return <GuestList guests={guests} />;
  })
  .add("without guests", () => <GuestList guests={[]} />);

let getPollChartProps = () => ({
  rows: [
    { choice: "1 point", votes: 1 },
    { choice: "2 points", votes: 2 },
    { choice: "3 points", votes: 3 }
  ],
  totalVotes: sum([1, 2, 3])
});

storiesOf("PollChart", module)
  .add("is in progress", () => {
    let { rows, totalVotes } = getPollChartProps();
    return <PollChart rows={rows} totalVotes={totalVotes} inProgress={true} />;
  })
  .add("is done voting", () => {
    let { rows, totalVotes } = getPollChartProps();
    return <PollChart rows={rows} totalVotes={totalVotes} inProgress={false} />;
  });

storiesOf("Signin", module).add("default", () => (
  <Signin submitFunc={action("submitted")} />
));
