const roomModel = require("./roomModel");

module.exports.createRoom = (req, res) => {
  roomModel
    .createRoom(
      req.body.question,
      req.body.choice1,
      req.body.choice2,
      req.body.choice3,
      req.body.choice4
    )
    .then(response => {
      res.send(response);
    });
};

module.exports.getRoom = (req, res) => {
  console.log("HI");
  console.log(req.params);
  roomModel.getRoom(req.params.id).then(response => {
    res.send(response);
  });
};
