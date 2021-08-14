const Sequelize = require("sequelize");
const sequelize = require("./connection");
const bulkCreate = require("./bulkCreate");

const UserModel = require("../models/users");

const User = new UserModel(sequelize, Sequelize);

sequelize
  .sync({ force: true })
  .then(() => {
    bulkCreate();
    console.log("All models were synchronized successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  User,
};
