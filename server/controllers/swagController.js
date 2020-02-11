const swag = require("../models/swag");

module.exports = function(req, res, next) {
  res.status(200).json(swag);
}