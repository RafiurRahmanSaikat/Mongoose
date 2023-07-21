const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

//! Server Connection

const port = process.env.PORT || 5000;

// ! DataBase Connection

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to database".green.bold))
  .catch((error) => console.error(error));


app.listen(port, () => {
  console.log(`App is running on port : ${port}`.yellow.bold);
});
