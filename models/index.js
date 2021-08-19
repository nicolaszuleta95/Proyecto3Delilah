const User = require("./users");
const Dish = require("./dishes");
const Fav = require("./favs");
const Item = require("./items");
const Order = require("./orders");

Order.belongsTo(User, { foreignKey: { allowNull: false } });
Order.belongsToMany(Dish, { through: Item });
Order.hasMany(Item);

Dish.belongsToMany(Order, { through: Item });
Dish.belongsToMany(User, { through: Fav });
Dish.hasMany(Item);

Item.belongsTo(Dish);

User.belongsToMany(Dish, { through: Fav });
User.hasMany(Order);

Fav.belongsTo(User, { onDelete: "cascade" });

module.exports = {
  User,
  Dish,
  Fav,
  Item,
  Order,
};
