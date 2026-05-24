import { Expense } from "../model/expense.js";

export const createExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    // const userId = req.userId;

    // if(!userId){
    //     res.status(401).json({message : "unauthorized access" , data:{}});
    //     return;
    // }

    if (!amount || !category) {
      res
        .status(400)
        .json({ message: "invalid fields", data: {}, success: false });
      return;
    }

    const expense = await Expense.create({ amount, category, description });

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

export const getExpense = async (req, res) => {
  try {
    const result = await Expense.find({});

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

export const dashboardMatrices = async (req, res) => {
  try {
    const [total, maxCatExpense] = await Promise.all([
      totalExpense(),
      catExpense(),
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

const totalExpense = async () => {
  try {
    const prevMonth = new Date();
    prevMonth.setMonth(prevMonth.getMonth() - 1);

    const expenses = await Expense.find({
      createdAt: { $gt: prevMonth },
    });

    console.log(expenses)

    const total = expenses.reduce((sum, item) => sum + item.amount, 0);

    return total;
  } catch (error) {
    console.error("Error: totalExpense", error);
  }
};
const catExpense = async () => {
  try {
    const expenses = await Expense.find({});

    const expenseMap = new Map();

    for (const expense of expenses) {
      expenseMap.set(
        expense.category,
        (expenseMap.get(expense.category) ?? 0) + expense.amount,
      );
    }

    let value = 0;
    let category;
    for (const [cat, val] of expenseMap) {
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


export const deleteExpense = async (req, res) => {
  try {
    await Expense.deleteMany({})
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


export const getCategoryWiseExpense = async (req, res) => {
  try {
    const expenses = await Expense.find({});

    const expenseMap = new Map();

    for (const expense of expenses) {
      expenseMap.set(
        expense.category,
        (expenseMap.get(expense.category) ?? 0) + expense.amount,
      );
    }

    const result = [];

    for (const [cat, val] of expenseMap) {
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