const express = require("express");
const dishController = require("../controllers/dishes");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get("/", dishController.getDishes);
router.post("/", authorization, dishController.addDish);

module.exports = router;
