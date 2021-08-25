const { Dish } = require("../models");

exports.addDish = async (req, res) => {
  const { name, price, description, category, photo } = req.body;

  try {
    const newDish = await Dish.create({
      name,
      price,
      description,
      category,
      photo,
    });
    res.status(201).send(newDish);
  } catch (err) {
    res.status(400).send({ error: "Error creating new dish" });
  }
};

exports.getDishes = async (req, res) => {
  try {
    Dish.findAll().then((dish) => {
      res.json(dish);
    });
  } catch (err) {
    res.status(400).send({ error: "Error getting all the dishes" });
  }
};
