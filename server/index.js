// dependencies
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// setting up server
let server = http.createServer(app);

let io = require("socket.io")(server);
io.on("connection", socket => {
  socket.emit("news", { hello: "world" });
  console.log("Connected!");
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./../client/build")));

//routers
const userRouter = express.Router();
app.use("/api/user", userRouter);
require("./user/userRoute")(userRouter);
const roomRouter = express.Router();
app.use("/api/room", roomRouter);
require("./room/roomRoute")(roomRouter);

// test api
app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(3000, err => {
  console.log("listening on port 3000");
});
