import React from 'react'
import Navbar from '../components/Navbar'
import ExpenseCard from '../components/ExpenseCard'
import AddExpense from '../components/AddExpense'
import ExpenseList from "../components/ExpenseList"
import CategorySummary from '../components/CategorySummary'
import Footer from '../components/footer'
import { ChartNoAxesColumn, IndianRupee } from "lucide-react";

const featureComponent = [
  { title: "Total Expense", subtitle: "This month", Icon: IndianRupee, value: 120 },
  { title: "Top Category", subtitle: "Highest spending", Icon: ChartNoAxesColumn, value: 100 }
]

const Dashboard = () => {
  return (
    <div className="w-full relative min-h-screen bg-[#F8F8F6]">
      <Navbar />
      <div className="w-full px-5">
        <p className="w-full my-5 flex items-center font-bold text-gray-800 text-2xl">
        Welcome Aman Raj 👋
      </p>
      <div className="flex flex-col gap-5 md:flex-row w-full h-full ">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between items-stretch gap-5 w-full h-full ">
            {featureComponent.map((item, index) => (
              <ExpenseCard key={index} Icon={item.Icon} subtitle={item.subtitle} title={item.title} value={item.value} />
            ))}
          </div>
          <AddExpense />
        </div>
        <CategorySummary />
      </div>
      </div>
      <ExpenseList />
      <Footer />
    </div>
  )
}

export default Dashboard