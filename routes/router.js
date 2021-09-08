const express = require("express");
const authRouter = require("./auth");
const dishRouter = require("./dishes");
const orderRouter = require("./orders");
const authentication = require("../middleware/authentication");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dish", authentication, dishRouter);
router.use("/order", authentication, orderRouter);

module.exports = router;
