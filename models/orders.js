const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Order = sequelize.define(
  "Order",
  {
    // Model attributes are defined here
    order_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isInt: true,
      },
    },
    user_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "NUEVO",
      validate: {
        notEmpty: true,
        isIn: [["NUEVO", "CONFIRMADO", "PREPARANDO", "ENVIANDO", "ENTREGADO"]],
        len: [5, 10],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100],
      },
    },
    pay_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["Efectivo", "Credito"]],
        len: [2, 8],
      },
    },
  },
  {
    // Other model options go here
    tableName: "orders",
  }
);

// `sequelize.define` also returns the model
console.log(Order === sequelize.models.Order); // true
module.exports = Order;
