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
    .then(room => {
      let { question, choice1, choice2, choice3, choice4 } = room[0].dataValues;
      let roomInfo = { question, choice1, choice2, choice3, choice4 };
      res.send(roomInfo);
    });
};
