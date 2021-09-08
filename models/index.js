const User = require("./users");
const Dish = require("./dishes");
const Fav = require("./favs");
const Item = require("./items");
const Order = require("./orders");

/**
 * TODO check the relationships they are wrong
 */

User.hasMany(Order);
User.hasMany(Fav);

Dish.hasMany(Fav);
Dish.hasMany(Item);

Fav.belongsTo(User);
Fav.belongsTo(Dish);

Item.belongsTo(Dish);
Item.belongsTo(Order);

Order.hasMany(Item);
Order.belongsTo(User);

module.exports = {
  User,
  Dish,
  Fav,
  Item,
  Order,
};
