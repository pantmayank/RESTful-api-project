const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Order Placed",
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Fetched order with id: ${req.params.orderId}`,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Deleted ${req.params.orderId} order`,
  });
});

module.exports = router;
