import { CREATE_EXPENSE, GET_CATEGORY_WISE_EXPENSE, GET_DASHBOARD_MATRICES, GET_EXPENSE } from "../utils/ApiConstants.js";
import { defaultApi } from "../utils/defaultApi.js";

/**
 * create new expense
 * @param {*} amount 
 * @param {*} category 
 * @param {*} description 
 * @returns expense object
 */

export const createExpense = async (amount, category, description) => {
  const response = await defaultApi.post(CREATE_EXPENSE, {
    amount,
    category,
    description,
  });

  if(response.success) return response.data
  return null;
};

/**
 * get all expense
 * @returns list of expenses
 */

export const getExpense = async () => {
  const response = await defaultApi.get(GET_EXPENSE);

  if(response.success) return response.data
  return null;
};

/**
 *
 * @returns totalExpense and maxCategoryExpense
 */

export const dashboardMatrices = async () => {
  const response = await defaultApi.get(GET_DASHBOARD_MATRICES);

  if(response.success) return response.data
  return null;
};

/**
 * 
 * @returns list of amount according to category
 */

export const getCategoryWiseExpense = async () => {
  const response = await defaultApi.get(GET_CATEGORY_WISE_EXPENSE);

  if(response.success) return response.data
  return null;
};
