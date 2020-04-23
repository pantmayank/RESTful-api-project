//Importing Middlewares and other essential requirements
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Importing routers
const productsRouter = require("./api/routes/products");
const ordersRouter = require("./api/routes/orders");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS headers
app.use((req, res, next) => {
  // * is used to give access to all origin but we can also allow only our own site by specifing it
  res.header("Access-Cross-Allow-Origin", "*");
  // To define which types of headers we want to accept
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
    res.status(200).json({});
  }
  next();
});
//Routes which will handle requests
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//Exporting app module
module.exports = app;
