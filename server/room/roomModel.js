const db = require("../db.js");

exports.createRoom = (question, choice1, choice2, choice3, choice4) => {
  return db.Room
    .findOrCreate({ where: { question, choice1, choice2, choice3, choice4 } })
    .then(room => {
      console.log(room);
      return room;
    });
};
