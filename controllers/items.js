const { Item, Dish } = require("../models");

exports.createItem = async (req, res) => {
  const { order_ID, dish_ID, quantity } = req.body;

  const query = {};
  query.where = { dish_ID: dish_ID };
  const DishItem = await Dish.findOne(query);
  const price = DishItem.price * quantity;

  try {
    const newItem = await Item.create({
      order_ID,
      dish_ID,
      quantity,
      price,
    });
    res.status(201).send(newItem);
  } catch (err) {
    res.status(400).send({ error: "Error creating new Item" });
  }
};
