const express = require("express");

const productsRouter = require("./api/routes/products");
const ordersRouter = require("./api/routes/orders");

const app = express();

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
