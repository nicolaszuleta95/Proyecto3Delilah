const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    user_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isInt: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 25],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100],
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 15],
      },
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        notEmpty: true,
        isIn: [["admin", "user"]],
        len: [2, 5],
      },
    },
  },
  {
    // Other model options go here
    tableName: "users",
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
