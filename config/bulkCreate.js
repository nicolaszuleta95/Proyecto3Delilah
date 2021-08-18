const UserModel = require("../models/users");
const DishModel = require("../models/dishes");
const ItemModel = require("../models/items");

/**
 * This function creates records for each table in bulk
 */

function bulkCreate() {
  UserModel.bulkCreate(
    [
      {
        username: "admin",
        password: "admin123",
        email: "admin@admin.com",
        fullname: "administrador admin",
        address: "calle Admin",
        phone: "1234567",
        user_type: "admin",
      },
      {
        username: "cliente1",
        password: "cliente123",
        email: "cliente@cliente.com",
        fullname: "cliente cliente1",
        address: "calle Cliente",
        phone: "1234567",
        user_type: "user",
      },
    ],
    { validate: true }
  ).catch((errors) => {
    console.log(errors);
  });
  DishModel.bulkCreate(
    [
      {
        name: "Spaghetti",
        price: "100",
        description: "Delicioso Spaghetti con salsa napolitana",
        category: "Pastas",
        photo:
          "https://images.pexels.com/photos/41320/beef-cheese-cuisine-delicious-41320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        name: "Solomito",
        price: "150",
        description: "Filete de solomito jugoso",
        category: "Carnes",
        photo:
          "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        name: "Sopa de Arroz",
        price: "50",
        description: "Sopita de Arroz con verduras",
        category: "Sopas",
        photo:
          "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    { validate: true }
  ).catch((errors) => {
    console.log(errors);
  });
  ItemModel.bulkCreate(
    [
      {
        order_ID: "1",
        dish_ID: "1",
        quantity: "2",
        price: "200",
      },
      {
        order_ID: "1",
        dish_ID: "2",
        quantity: "1",
        price: "150",
      },
      {
        order_ID: "2",
        dish_ID: "2",
        quantity: "1",
        price: "150",
      },
      {
        order_ID: "3",
        dish_ID: "3",
        quantity: "2",
        price: "100",
      },
      {
        order_ID: "3",
        dish_ID: "1",
        quantity: "1",
        price: "100",
      },
    ],
    { validate: true }
  ).catch((errors) => {
    console.log(errors);
  });
}

module.exports = bulkCreate;
