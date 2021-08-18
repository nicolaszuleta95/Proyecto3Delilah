const Sequelize = require("sequelize");
const sequelize = require("./connection");
const bulkCreate = require("./bulkCreate");

const UserModel = require("../models/users");
const DishModel = require("../models/dishes");
const ItemModel = require("../models/items");

const User = new UserModel(sequelize, Sequelize);
const Dish = new DishModel(sequelize, Sequelize);
const Item = new ItemModel(sequelize, Sequelize);

const { DB_ENV } = process.env;

if (DB_ENV === "prod") {
  sequelize
    .sync()
    .then(() => {
      console.log("All models were synchronized successfully.");
    })
    .catch((err) => {
      console.log(err);
    });
} else if (DB_ENV === "dev") {
  sequelize
    .sync({ force: true })
    .then(() => {
      bulkCreate();
    })
    .then(() => {
      console.log(
        "All models were synchronized successfully with the dev rows created in bulk."
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  User,
  Dish,
  Item,
};
