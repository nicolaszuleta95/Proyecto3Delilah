const express = require("express");
const authRouter = require("./auth");
const dishRouter = require("./dishes");
const authentication = require("../middleware/authentication");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dish", authentication, dishRouter);

module.exports = router;
