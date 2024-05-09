"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenses_controller_1 = require("../controllers/expenses-controller");
const router = express_1.default.Router();
router.get("/", (req, res) => (0, expenses_controller_1.getAllExpensesController)(req, res)); // Get all expenses
router.get("/:id", (req, res) => (0, expenses_controller_1.getExpenseController)(req, res)); // Get a specific expense
router.post("/", (req, res) => (0, expenses_controller_1.createExpensesController)(req, res)); // Create a new expense
router.put("/:id", (req, res) => (0, expenses_controller_1.updateExpensesController)(req, res)); // Update an expense
router.delete("/:id", (req, res) => (0, expenses_controller_1.deleteExpensesController)(req, res)); // Delete an expense
exports.default = router;
