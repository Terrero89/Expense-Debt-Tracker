const getAllExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING EXPENSES"
    });
  };
  
  const createExpensesController = (req, res) => {

    res.status(200).json({
      message:"WORKING EXPENSES"
    });
  };
  

  module.exports = {
  getAllExpensesController,
  createExpensesController,
  };
  