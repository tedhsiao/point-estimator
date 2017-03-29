import { nodeEnvironments } from "./Utils/environment";
import io from "socket.io-client";

let socketEvents;
if (process.env.NODE_ENV === nodeEnvironments.PRODUCTION) {
  let socket = io();

  socketEvents = () => {
    socket.on("connect", socket => {
      console.log("Connected!");
    });
  };
} else {
  socketEvents = () => {};
}

export default socketEvents;
