const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Fav = sequelize.define(
  "Fav",
  {
    // Model attributes are defined here
    user_ID: {
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
  },
  {
    // Other model options go here
    tableName: "favs",
  }
);

// `sequelize.define` also returns the model
console.log(Fav === sequelize.models.Fav); // true
module.exports = Fav;
