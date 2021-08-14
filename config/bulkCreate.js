const UserModel = require("../models/users");

/**
 * TODO: Fix the validation so that wrong data wont populate the database
 */

function bulkCreate() {
  UserModel.bulkCreate([
    {
      username: "admin",
      password: "admin123",
      email: "admin@admin.com",
      fullname: "administrador admin",
      address: "calle Admin",
      phone: "1234567",
      user_type: "blabla", //! this is an error validation should work and its not working
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
  ]);
}

module.exports = bulkCreate;
