const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// * MiddleWare

app.use(express.json());
app.use(cors());

// * Routes

const productRouter = require("./routes/product.route")


app.use("/api/v1/product", productRouter);

app.get("/", (req, res) => {
    res.send("Server is working!!");
});


module.exports = app;
