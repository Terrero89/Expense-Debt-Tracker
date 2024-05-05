const getAllExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING EXPENSES"
    });
  };

  const getExpenseController = (req, res) => {

    res.status(200).json({
      message:"WORKING SINGLE ID EXPENSES"
    });
  };
  
  
  const createExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING CREATE EXPENSES"
    });
  };
  
  const updateExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING UPDATE EXPENSES"
    });
  };
  
  const deleteExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING DELETE EXPENSES"
    });
  };

  module.exports = {
  getAllExpensesController,
  createExpensesController,
  updateExpensesController,
  deleteExpensesController,
  getExpenseController,

  };
  