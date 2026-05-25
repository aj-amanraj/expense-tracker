import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ExpenseCard from '../components/ExpenseCard'
import AddExpense from '../components/AddExpense'
import ExpenseList from "../components/ExpenseList"
import CategorySummary from '../components/CategorySummary'
import { ChartNoAxesColumn, IndianRupee } from "lucide-react";
import Footer from '../components/Footer'
import { dashboardMatrices } from '../api/expense'
import ExpenseProvider from '../context/ExpenseProvider'
import { useExpense } from '../hooks/useExpense'



const page = () => {
  return (
    <ExpenseProvider>
      <Dashboard />
    </ExpenseProvider>
  )
}

export default page

function Dashboard() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [topCategory, setTopCategory] = useState({category: 'N/A', amount: 0});

  const { reload } = useExpense();

  const featureComponent = [
  { title: "Total Expense", subtitle: "This month", Icon: IndianRupee, value: totalExpense },
  { title: "Top Category", subtitle: `Highest spending category: ${topCategory.category}`, Icon: ChartNoAxesColumn, value: topCategory.amount }
]

  //Dynamic Welcome banner
  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";

const fetchDashboardData = async () => {
  const result = await dashboardMatrices();

  if (result) {
    setTotalExpense(result.expense || 0);
    setTopCategory(result.expensePerCategory);
  }
};

useEffect(() => {
  fetchDashboardData();
}, [reload])

  return (
    <div className="w-full relative min-h-screen bg-[#F8F8F6]">
      <Navbar />
      <div className="w-full px-5">
        <h1 className="w-full my-5 flex items-center font-bold text-gray-800 text-2xl">
        Welcome {userName} 👋
      </h1>
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