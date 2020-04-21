const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling products GET request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling products POST request",
  });
});

router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  res.status(200).json({
    message: `Received product with id ${productId}`,
  });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Patch request for /products",
  });
});

router.delete("/:producId", (req, res, next) => {
  res.status(200).json({
    message: "Delete request for /products",
  });
});

module.exports = router;
