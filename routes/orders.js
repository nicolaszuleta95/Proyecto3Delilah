const express = require("express");
const orderController = require("../controllers/orders");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.post("/", orderController.addOrder);
router.get("/", orderController.getOrders);
router.get("/:order_ID", orderController.getOrder);
router.delete("/:order_ID", authorization, orderController.deleteOrder);
router.put("/:order_ID", authorization, orderController.updateOrder);

module.exports = router;
