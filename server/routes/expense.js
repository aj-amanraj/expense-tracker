import { Router } from "express";
import { createExpense, dashboardMatrices, deleteExpense, getCategoryWiseExpense, getExpense } from "../controller/expenseController.js";

const expenseRouter = Router();

expenseRouter.post('/create',createExpense);

expenseRouter.get('/get', getExpense);

expenseRouter.get('/dashboard', dashboardMatrices);

expenseRouter.delete('/all', deleteExpense);

expenseRouter.get('/category-wise-expense',getCategoryWiseExpense)

export default expenseRouter;