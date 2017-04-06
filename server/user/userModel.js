const db = require("../db.js");

exports.createUser = (name, email, googleId) => {
  return db.User.create({ name, email, googleId }).then(user => {
    console.log(user);
    return user;
  });
};

exports.getAllUsers = () => {
  return db.User
    .findAll({
      attributes: ["username", "id"]
    })
    .then(users => {
      return users;
    });
};

exports.getUserById = userId => {
  return db.User
    .findOne({
      where: {
        id: userId
      },
      attributes: ["username", "id"]
    })
    .then(user => {
      return user.dataValues;
    });
};
