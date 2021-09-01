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

exports.getDish = async (req, res) => {
  const { dish_ID } = req.params;
  const query = {};

  query.where = { dish_ID: dish_ID };

  try {
    const dish = await Dish.findOne(query);
    if (dish) {
      res.send(dish);
    } else {
      res.send({ error: `Dish ${dish_ID} not found` });
    }
  } catch (err) {
    res.status(400).send({ error: "Unable to find the dish" });
  }
};

exports.deleteDish = async (req, res) => {
  const { dish_ID } = req.params;
  const query = {};

  query.where = { dish_ID: dish_ID };

  try {
    const dish = await Dish.findOne(query);
    if (dish) {
      dish.destroy();
      res.send("Dish deleted successfully");
    } else {
      res.send({ error: `Dish ${dish_ID} not found` });
    }
  } catch (err) {
    res.status(400).send({ error: "Unable to delete the dish" });
  }
};

exports.updateDish = async (req, res) => {
  const { dish_ID } = req.params;
  const { name, price, description, category, photo } = req.body;
  const query = {};

  query.where = { dish_ID: dish_ID };

  try {
    const dish = await Dish.findOne(query);
    if (dish) {
      const updateCount = await Dish.update(
        {
          name,
          price,
          description,
          category,
          photo,
        },
        query
      );
      res.send({ message: `Dish ${dish_ID} updated successfully` });
    } else {
      res.send({ error: `Dish ${dish_ID} not found` });
    }
  } catch (err) {
    res.status(400).send({ error: "Not able to update the dish" });
  }
};
