const swag = require("../models/swag");

module.exports = function(req, res) {
  const { category } = req.query;

  const itemsList = swag.filter(item => item.category === category);

  if (!category) {
    res.status(200).send(swag);
  } else {
    res.status(200).send(itemsList);
  }
}