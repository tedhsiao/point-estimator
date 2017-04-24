var Sequelize = require("sequelize");

var sequelize = new Sequelize("point_estimator", "root", null, {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.User = sequelize.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      field: "full_name"
    },
    email: {
      type: Sequelize.STRING
    },
    googleId: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
);

exports.Room = sequelize.define(
  "room",
  {
    question: {
      type: Sequelize.STRING
    },
    choice1: {
      type: Sequelize.STRING
    },
    choice2: {
      type: Sequelize.STRING
    },
    choice3: {
      type: Sequelize.STRING
    },
    choice4: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
);

exports.User.sync();
exports.Room.sync();
