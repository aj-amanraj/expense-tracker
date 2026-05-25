import React from "react";
import { ExpenseContext } from "../context/ExpenseProvider";

/**
 * custom hook
 */

export const useExpense = () => React.useContext(ExpenseContext);