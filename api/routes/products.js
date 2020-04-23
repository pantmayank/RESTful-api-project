const express = require("express");

//Importing router which will handle all the routes requested to this page
const router = express.Router();

// GET request
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling products GET request",
  });
});

// POST request using body-parser to use the body of POST request
router.post("/", (req, res, next) => {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
  };
  res.status(200).json({
    message: "Handling products POST request",
    product,
  });
});

// GET request which uses params to target specific product
router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  res.status(200).json({
    message: `Received product with id ${productId}`,
  });
});

// PATCH request used to update the product
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Patch request for /products",
  });
});

// DELETE request
router.delete("/:producId", (req, res, next) => {
  res.status(200).json({
    message: "Delete request for /products",
  });
});

module.exports = router;
