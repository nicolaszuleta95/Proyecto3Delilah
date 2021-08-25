const express = require("express");
const dishController = require("../controllers/dishes");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get("/", dishController.getDishes);
router.get("/:dish_ID", dishController.getDish);
router.delete("/:dish_ID", authorization, dishController.deleteDish);
router.post("/", authorization, dishController.addDish);

module.exports = router;
