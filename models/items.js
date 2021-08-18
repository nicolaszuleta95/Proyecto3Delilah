const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Item = sequelize.define(
  "Item",
  {
    // Model attributes are defined here
    item_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isInt: true,
      },
    },
    order_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    dish_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    // Other model options go here
    tableName: "items",
  }
);

// `sequelize.define` also returns the model
console.log(Item === sequelize.models.Item); // true
module.exports = Item;
