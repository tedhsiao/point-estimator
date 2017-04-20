var userController = require("./userController.js");

module.exports = function(app) {
  app.post("/create", userController.createUser);
  app.get("/all", userController.getAllUsers);
  app.get("/users/:id", userController.getUserById);
};
