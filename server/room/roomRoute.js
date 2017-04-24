const roomController = require("./roomController.js");

module.exports = function(app) {
  app.post("/", roomController.createRoom);
  app.get("/:id", roomController.getRoom);
};
