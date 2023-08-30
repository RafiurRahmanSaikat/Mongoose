const express = require("express");
const cors = require("cors");
const app = express();

//! MiddleWare

app.use(express.json({ limit: '50mb' }));
app.use(cors());

//? Routes

const productRouter = require("./routes/product.route")
const storeRouter = require("./routes/store.route")
const categoryRouter = require("./routes/category.route")
const brandRouter = require("./routes/brand.route")


app.use("/api/v1/product", productRouter);
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/brand", brandRouter);





app.get("/", (req, res) => {
    res.send("Server is working!!");
});

app.get('*', (req, res) => {
    res.send("No Route Found !!");
});



module.exports = app;
