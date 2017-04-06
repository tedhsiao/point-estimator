const userModel = require("./userModeL");

module.exports.createUser = (req, res) => {
  userModel
    .createUser(req.body.name, req.body.email, req.body.googleId)
    .then(user => {
      console.log(user);
    });
};

module.exports.getAllUsers = (req, res) => {
  userModel.getAllUsers().then(users => {
    console.log(users);
  });
};

module.exports.getUserById = (req, res) => {
  userModel.getUserById(req.body.userId).then(user => {
    console.log(user);
  });
};
