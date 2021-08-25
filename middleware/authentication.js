const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).send({
        error: "Authorization error: No token provided'",
      });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded) {
      req.auth = decoded;
      return next();
    }

    return res.status(401).json({ error: "Unauthorized token" });
  } catch (err) {
    return res.status(401).send({
      error: 'Invalid token provided"',
    });
  }
};
