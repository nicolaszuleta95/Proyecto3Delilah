const express = require("express");
const itemsController = require("../controllers/items");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.post("/", itemsController.createItem);

module.exports = router;
