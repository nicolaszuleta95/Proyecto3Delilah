const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async (req, res) => {
  const { username, password, email, fullname, address, phone, user_type } =
    req.body;

  try {
    const newUser = await User.create({
      username,
      password,
      email,
      fullname,
      address,
      phone,
      user_type,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send({ error: "Error registrando el usuario" }); // en el futuro mandar solo el error message
  }
};
