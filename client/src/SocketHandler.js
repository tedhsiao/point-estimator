import io from "socket.io-client";

let socket = io();

let socketEvents = () => {
  socket.on("connect", socket => {
    console.log("Connected!");
  });
};

export default socketEvents;
