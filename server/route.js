import authRoute from "./routes/auth.js";
import expenseRouter from "./routes/expense.js";

export const route = (app) => {
  app.use("/auth", authRoute); //register auth routes

  app.use("/expense", expenseRouter); //register expense routes

  /**
   * default api
   */
  app.get("/", (req, res) => {
    res.send("Expense Tracker Dashboard");
  });
  
};
