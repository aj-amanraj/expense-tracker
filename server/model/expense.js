import mongoose from "mongoose";


const expenseSchema = mongoose.Schema({
    category : {type: String, required : true, enum: ['rent', 'utilities', 'shopping', 'food', 'others'], default: "others"},
    amount : {type : Number, required: true, default: 0},
    description : {type : String}
}, {timestamps : true})

export const Expense = mongoose.model("expenses", expenseSchema)