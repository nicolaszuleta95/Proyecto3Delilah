const express = require("express");
const authRouter = require("./auth");
const dishRouter = require("./dishes");
const orderRouter = require("./orders");
const itemsRouter = require("./items");
const authentication = require("../middleware/authentication");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dish", authentication, dishRouter);
router.use("/order", authentication, orderRouter);
router.use("/item", authentication, itemsRouter);

module.exports = router;
