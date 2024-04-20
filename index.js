const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model");
const productRoute = require("./routes/product.route");

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}))
//routes
app.use("/product", productRoute)

mongoose
  .connect(
    "mongodb+srv://admin:admin@crudopsdb.rlx0hyy.mongodb.net/CRUD_ops?retryWrites=true&w=majority&appName=crudOpsDB"
  )
  .then(() => {
    console.log("Connected To Database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connectiong Failed!");
  });
