const UserModel = require("../models/users");

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
}

module.exports = bulkCreate;
