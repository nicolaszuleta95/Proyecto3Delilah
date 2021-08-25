const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = (req, res, next) => {
  console.log(req.auth);
  const { user_ID, user_type } = req.auth;

  if (user_type === "admin") {
    return next();
  } else {
    return res.status(403).send({ error: "Not authorized" });
  }
};
