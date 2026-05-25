import { Expense } from "../models/expense.js";

/**
 * this will create a new expense
 */

export const createExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;   //destructure body to get req. fields

    const userId = req.userId;

    if(!userId){
        res.status(401).json({message : "unauthorized access" , data:{}});
        return;
    }

    if (!amount || !category) {
      res
        .status(400)
        .json({ message: "invalid fields", data: {}, success: false });
      return;
    }

    const expense = await Expense.create({ amount, category, description, userId });    // create new expense to DB

    res.status(200).json({
      message: "Expense is Created Successfully",
      data: expense,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: {}, success: false });
    console.error("Error occurred while creating expense ", error);
  }
};

/**
 * get all expense from database
 */

export const getExpense = async (req, res) => {
  try {

    const userId = req.userId;

    if(!userId){
        res.status(401).json({message : "unauthorized access" , data:{}});
        return;
    }

    const result = await Expense.find({userId: userId});    //filter by userId

    res.status(200).json({
      message: "Expense fetched Successfully",
      data: result,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: {}, success: false });
    console.error("Error occurred while getting expense ", error);
  }
};

/**
 * get totalExpense and maxCategoryExpense
 */

export const dashboardMatrices = async (req, res) => {
  try {

    const userId = req.userId;

    if(!userId){
        res.status(401).json({message : "unauthorized access" , data:{}});
        return;
    }

// compute totalExpense and maxCategoryExpense

    const [total, maxCatExpense] = await Promise.all([    //this will execute both function at the same time
      totalExpense(userId),
      categoryExpense(userId),
    ]);

    res.status(200).json({
      message: "Expense fetched Successfully",
      data: {
        expense: total,
        expensePerCategory: {
          category: maxCatExpense.category,
          amount: maxCatExpense.amount,
        },
      },
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: {}, success: false });
    console.error("Error occurred while getting expense ", error);
  }
};

/**
 * compute totalExpense
 * @param {*} userId 
 * @returns {Number} totalExpense
 */

const totalExpense = async (userId) => {
  try {
    const prevMonth = new Date();
    prevMonth.setMonth(prevMonth.getMonth() - 1);

    const expenses = await Expense.find({
      userId: userId,
      createdAt: { $gt: prevMonth },    //get the expense created after the prev. month
    });

    const total = expenses.reduce((sum, item) => sum + item.amount, 0);   //aggregate totalExpense

    return total;
  } catch (error) {
    console.error("Error: totalExpense", error);
  }
};

/**
 * compute maxCategoryExpense
 * @param {*} userId 
 * @returns {String} category, {Number} amount
 */

const categoryExpense = async (userId) => {
  try {
    const expenses = await Expense.find({userId: userId});

    const expenseMap = new Map();     // map for storing cluster of expense category

    /**
     * we check for each expense and map the total amount categoryWise
     */

    for (const expense of expenses) {
      expenseMap.set(
        expense.category,
        (expenseMap.get(expense.category) ?? 0) + expense.amount,
      );
    }

    let value = 0;
    let category;
    for (const [cat, val] of expenseMap) {    //get the category with max. amount
      if (val > value) {
        value = val;
        category = cat;
      }
    }

    return { category: category, amount: value };
  } catch (error) {
    console.error("Error: CatExpense ", error);
  }
};

/**
 * delete all expenses of userId 
 */
export const deleteExpense = async (req, res) => {
  try {

    const userId = req.params;

    if(!userId){
        res.status(401).json({message : "unauthorized access" , data:{}});
        return;
    }

    await Expense.deleteMany({userId: userId})
    res.status(200).json({
      message: "Expense cleaned Successfully",
      data: {},
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: {}, success: false });
    console.error("Error occurred while getting expense ", error);
  }
};

/**
 * compute categoryWiseExpense
 */
export const getCategoryWiseExpense = async (req, res) => {
  try {

    const userId = req.userId;

    if(!userId){
        res.status(401).json({message : "unauthorized access" , data:{}});
        return;
    }

    const expenses = await Expense.find({userId: userId});

    const expenseMap = new Map();   // map for storing cluster of expense category

    /**
     * we check for each expense and map the total amount categoryWise
     */

    for (const expense of expenses) {
      expenseMap.set(
        expense.category,
        (expenseMap.get(expense.category) ?? 0) + expense.amount,
      );
    }

    const result = [];

    for (const [cat, val] of expenseMap) {    //push the category with amount in result list
        result.push({ category: cat, amount: val});
    }

    res.status(200).json({
      message: "Expense fetched Successfully",
      data: result,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: {}, success: false });
    console.error("Error occurred while getting expense ", error);
  }
};