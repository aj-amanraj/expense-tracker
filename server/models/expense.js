import mongoose from "mongoose";


const expenseSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, required: true, ref: 'users'},
    category : {type: String, required : true, enum: ['Rent', 'Travel', 'Utilities', 'Shopping', 'Food', 'Others'], default: "Others"},
    amount : {type : Number, required: true, default: 0},
    description : {type : String}
}, {timestamps : true})

export const Expense = mongoose.model("expenses", expenseSchema)