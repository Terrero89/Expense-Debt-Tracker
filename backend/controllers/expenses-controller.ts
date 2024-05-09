import { Request,Response} from 'express'


export const getAllExpensesController = (req: Request, res: Response) => {

    res.status(200).json({
      message:"WORKING EXPENSES"
    });
  };

  export const getExpenseController = (req: Request, res: Response) => {

    res.status(200).json({
      message:"WORKING SINGLE ID EXPENSES"
    });
  };
  
  
  export const createExpensesController = (req: Request, res:Response)=> {

    res.status(200).json({
      message:"WORKING CREATE EXPENSES"
    });
  };
  
  export const updateExpensesController = (req: Request, res: Response) => {

    res.status(200).json({
      message:"WORKING UPDATE EXPENSES"
    });
  };
  
 export const deleteExpensesController = (req: Request, res: Response)=> {

    res.status(200).json({
      message:"WORKING DELETE EXPENSES"
    });
  };

  module.exports =  {
  getAllExpensesController,
  createExpensesController,
  updateExpensesController,
  deleteExpensesController,
  getExpenseController,

  };
  