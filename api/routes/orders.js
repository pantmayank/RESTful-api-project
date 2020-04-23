const express = require("express");

//Importing router which will handle all the routes requested to this page
const router = express.Router();

//GET reques
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched",
  });
});

// GET request which uses params in the url
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Fetched order with id: ${req.params.orderId}`,
  });
});

// POST request which uses body-parser to use the data in the POST request
router.post("/", (req, res, next) => {
  const order = {
    orderId: req.body.orderId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Order Placed",
    orderDetails: order,
  });
});

//DELETE request
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Deleted ${req.params.orderId} order`,
  });
});

module.exports = router;
