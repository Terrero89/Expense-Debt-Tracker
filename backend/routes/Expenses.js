var express = require("express");
var router = express.Router();



//imported all controllers in as an object
const {
    getAllExpensesController,

  } = require("../controllers/expenses-controller");

  //router controllers
router.get("/api", getAllExpensesController); //all exams


module.exports = router