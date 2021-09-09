const { Order, User, Item } = require("../models");

exports.addOrder = async (req, res) => {
  const { state, pay_type } = req.body;
  const { user_ID } = req.auth;

  const query = {};
  query.where = { user_ID: user_ID };
  const UserOrder = await User.findOne(query);
  const address = UserOrder.address;

  const maxOrder = await Order.max("order_ID");

  const queryItems = {};
  queryItems.where = { order_ID: maxOrder + 1 };
  const total = await Item.sum("price", queryItems);

  try {
    const newOrder = await Order.create({
      user_ID,
      total,
      state,
      address,
      pay_type,
    });
    res.status(201).send(newOrder);
  } catch (err) {
    res.status(400).send({ error: "Error creating new Order" });
  }
};

exports.getOrders = async (req, res) => {};

exports.getOrder = async (req, res) => {};

exports.deleteOrder = async (req, res) => {};

exports.updateOrder = async (req, res) => {};
