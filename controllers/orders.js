const { Op } = require("sequelize");
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

exports.getOrders = async (req, res) => {
  const { user_ID, user_type } = req.auth;

  const query = {};
  query.where = { user_ID: user_ID };

  if (user_type === "admin") {
    try {
      Order.findAll().then((order) => {
        if (order.length == 0) {
          res.send("No Orders stored");
        }
        res.json(order);
      });
    } catch (err) {
      res.status(400).send({ error: "Error getting all the Orders" });
    }
  } else if (user_type === "user") {
    try {
      Order.findAll(query).then((order) => {
        if (order.length == 0) {
          res.send("No Orders stored for that user");
        } else {
          res.json(order);
        }
      });
    } catch (error) {
      res.status(400).send({ error: "Error getting all the Orders" });
    }
  } else {
    res
      .status(400)
      .send({ error: "Not able to get the Orders for this type of user" });
  }
};

exports.getOrder = async (req, res, next) => {
  const { order_ID } = req.params;
  const query = {};
  query.where = { order_ID: order_ID };

  const { user_ID, user_type } = req.auth;
  const queryUser = {};
  queryUser.where = { user_ID: user_ID };

  if (user_type === "admin") {
    try {
      const order = await Order.findOne(query);
      if (order) {
        res.send(order);
      } else {
        res.send({ error: `Order ${order_ID} not found` });
      }
    } catch (err) {
      res.status(400).send({ error: `Order ${order_ID} not found` });
    }
  } else if (user_type === "user") {
    try {
      const order = await Order.findAll({
        where: {
          [Op.and]: [{ user_ID: user_ID }, { order_ID: order_ID }],
        },
      });
      if (order.length == 0) {
        res.send(`Order ${order_ID} not found for this user`);
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(400).send({ error: `Unable to get order` });
    }
  }
};

exports.deleteOrder = async (req, res) => {};

exports.updateOrder = async (req, res) => {};
