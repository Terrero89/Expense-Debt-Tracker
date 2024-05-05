require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const expensesRoutes = require("./routes/Expenses");

//express app
const app = express();

//routes

//express app middleware
app.use(express.json()); //it passes any request and attach the body to the express mehtod--> it needs to be json()

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/", expensesRoutes)



//listening for requests

//connection to DB
//listen requests
//we are going to listen to request once we are connected to DB, if user is wrong or passwd does not match for mongodb
app.listen(process.env.PORT, () => {
  console.log("Connected to DB and listening on port",process.env.PORT );
});
