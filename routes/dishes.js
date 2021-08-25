const express = require("express");
const dishController = require("../controllers/dishes");

const router = express.Router();

router.post("/", dishController.addDish);

module.exports = router;
