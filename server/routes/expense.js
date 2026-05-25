import { Router } from "express";
import { createExpense, dashboardMatrices, deleteExpense, getCategoryWiseExpense, getExpense } from "../controllers/expenseController.js";
import isAuth from "../middleware/isAuth.js";

const expenseRouter = Router();

expenseRouter.post('/create', isAuth,  createExpense);

expenseRouter.get('/get', isAuth, getExpense);

expenseRouter.get('/dashboard', isAuth, dashboardMatrices);

expenseRouter.delete('/all/:userId', deleteExpense);

expenseRouter.get('/category-wise-expense', isAuth, getCategoryWiseExpense)

export default expenseRouter;