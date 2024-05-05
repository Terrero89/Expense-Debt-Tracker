var express = require("express");
var router = express.Router();



//imported all controllers in as an object
const {
    getAllExpensesController,


  } = require("../controllers/expenses-controller");

  //router controllers
  // routes are pre fille with /api/expenses path
router.get("/", getAllExpensesController); //all exams
router.get("/:id", getExpenseController); //all exams
router.get("/", createExpensesController); //all exams
router.get("/:id", updateExpensesController); //all exams
router.get("/:id", deleteExpensesController); //all exams


module.exports = router