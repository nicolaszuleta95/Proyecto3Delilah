const express = require("express");
const authRouter = require("./auth");
const dishRouter = require("./dishes");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dish", dishRouter);

module.exports = router;
