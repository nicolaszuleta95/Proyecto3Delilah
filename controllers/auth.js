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
    res.status(400).send({ error: "Register error" });
  }
};

exports.login = async (req, res) => {
  const { username, email, password } = req.body;

  const usernameLogin = User.findOne({ where: { username: username } });
  const emailLogin = User.findOne({ where: { email: email } });

  if (!usernameLogin) {
    res.status(400).send({ error: "Incorrect username or password" });
  } else if (!emailLogin) {
    res.status(400).send({ error: "Incorrect username or password" });
  }

  try {
    const userLogin = await User.findOne({
      where: {
        username: username,
        email: email,
      },
    });
    console.log("user", userLogin);
    if (userLogin.password === password) {
      const token = jwt.sign(
        { user_ID: userLogin.user_ID, user_type: userLogin.user_type },
        process.env.JWT_SECRET
      );
      return res.send({ token });
    }
    return res.status(401).send({ error: "Incorrect username or password" });
  } catch (err) {
    return res.status(400).send({ error: "Login error" });
  }
};

exports.checkDuplicateUsernameOrEmail = async (req, res) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};
