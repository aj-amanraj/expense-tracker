import authRoute from "./routes/auth.js"
import expenseRouter from "./routes/expense.js"

export const route = (app) => {
    app.use('/auth', authRoute),
    app.use('/expense', expenseRouter)
}
