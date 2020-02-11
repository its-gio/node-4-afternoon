const swag = require("../models/swag");

function addItems(req, res) {
  const { id } = req.params;
  let { user } = req.session;

  const index = swag.findIndex(item => item.id === +id);

  if (index !== -1) {
    const item = swag[index];

    user.cart.push(item);
    user.total += item.price;
  }

  res.status(200).send(user);
}

function deleteItem(req, res) {
  const { id } = req.params;
  let { user } = req.session;

  const index = user.cart.findIndex(item => item.id === +id);

  if (index !== -1) {
    user.total -= user.cart[index].price;
    user.cart.splice(index, 1);
  }

  res.status(200).send(user);
}

function checkout(req, res) {
  const { user } = req.session;

  user.cart = [];
  user.total = 0;

  res.status(200).send(user);
}

module.exports = {
  addItems,
  deleteItem,
  checkout
}