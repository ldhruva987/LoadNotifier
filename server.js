const mongoose = require("mongoose");
const Product = require("./models/product.js");
const productRoute = require("./routes/productRoute.js");
const express = require("express");
const limiter = require('./utilities/rateLimiter.js');
const concurrentLimiter = require('./utilities/concurrentRateLimiter.js');
const app = express();

const port = process.env.PORT || 3000;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(concurrentLimiter);
app.use(limiter);

//Routes
app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//MongoDB connection
mongoose
  .connect(
    "mongodb+srv://lvbabu1999:Babu%401999@sbclustur.4sphtya.mongodb.net/?retryWrites=true&w=majority&appName=SBClustur"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("connection failed");
  });
