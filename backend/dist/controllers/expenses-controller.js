"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpensesController = exports.updateExpensesController = exports.createExpensesController = exports.getExpenseController = exports.getAllExpensesController = void 0;
const getAllExpensesController = (req, res) => {
    res.status(200).json({
        message: "WORKING EXPENSES"
    });
};
exports.getAllExpensesController = getAllExpensesController;
const getExpenseController = (req, res) => {
    res.status(200).json({
        message: "WORKING SINGLE ID EXPENSES"
    });
};
exports.getExpenseController = getExpenseController;
const createExpensesController = (req, res) => {
    res.status(200).json({
        message: "WORKING CREATE EXPENSES"
    });
};
exports.createExpensesController = createExpensesController;
const updateExpensesController = (req, res) => {
    res.status(200).json({
        message: "WORKING UPDATE EXPENSES"
    });
};
exports.updateExpensesController = updateExpensesController;
const deleteExpensesController = (req, res) => {
    res.status(200).json({
        message: "WORKING DELETE EXPENSES"
    });
};
exports.deleteExpensesController = deleteExpensesController;
module.exports = {
    getAllExpensesController: exports.getAllExpensesController,
    createExpensesController: exports.createExpensesController,
    updateExpensesController: exports.updateExpensesController,
    deleteExpensesController: exports.deleteExpensesController,
    getExpenseController: exports.getExpenseController,
};
