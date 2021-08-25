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
