import express, { Router,Request,Response } from 'express';
import {
  createExpensesController,
  deleteExpensesController,
  getAllExpensesController,
  getExpenseController,
  updateExpensesController
} from "../controllers/expenses-controller";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => getAllExpensesController(req, res)); // Get all expenses
router.get("/:id", (req: Request, res: Response) => getExpenseController(req,res)); // Get a specific expense
router.post("/", (req: Request, res: Response) => createExpensesController(req,res)); // Create a new expense
router.put("/:id", (req: Request, res: Response) => updateExpensesController(req,res)); // Update an expense
router.delete("/:id", (req: Request, res: Response) => deleteExpensesController(req,res)); // Delete an expense



export default router;