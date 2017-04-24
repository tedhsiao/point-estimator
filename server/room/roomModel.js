const db = require("../db.js");

exports.createRoom = (question, choice1, choice2, choice3, choice4) => {
  return db.Room
    .findOrCreate({ where: { question, choice1, choice2, choice3, choice4 } })
    .then(room => {
      room = room[0];
      let response = {
        id: room.dataValues.id,
        question: room.dataValues.question,
        choices: [
          room.dataValues.choice1,
          room.dataValues.choice2,
          room.dataValues.choice3,
          room.dataValues.choice4
        ]
      };
      return response;
    });
};

exports.getRoom = id => {
  return db.Room.findOne({ where: { id } }).then(room => {
    let response = {
      id: room.dataValues.id,
      question: room.dataValues.question,
      choices: [
        room.dataValues.choice1,
        room.dataValues.choice2,
        room.dataValues.choice3,
        room.dataValues.choice4
      ]
    };
    return response;
  });
};
