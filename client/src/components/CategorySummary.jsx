import { IndianRupee } from "lucide-react";
import React, { useState } from "react";
import { getCategoryWiseExpense } from "../api/expense";
import { useExpense } from "../hooks/useExpense";

const CategorySummary = () => {
  const [category , setCategory] = useState([]);
  const { reload } = useExpense();

  const fetchCategoryWiseExpense = async () => {
    const response = await getCategoryWiseExpense();

    if (response) setCategory(response)
  }

  React.useEffect(() => {
    fetchCategoryWiseExpense();
  },[reload])
  return (
    <div className="bg-white border-2 p-5 border-white/5 shadow-md w-full rounded-lg">
      <div>
        <h3 className="text-2xl font-bold">Expense Summary</h3>
        <p className="text-sm text-gray-400">Category Wise</p>
      </div>

      <div className="overflow-auto flex flex-col gap-1 mt-4">
        {category.map((expense,i) => 
        <ItemCard key={i} expense={expense.category} amount={expense.amount} />)}
      </div>
    </div>
  );
};

export default CategorySummary;




function ItemCard({expense, amount}) {
  return ( 
    <div className="flex flex-col items-center">
    <div className="w-[94%] border-black/10 border " />
    <div className="flex w-full justify-between px-2 py-1">
      <h4 className="uppercase font-semibold">{expense}:</h4>
      <div className="flex items-center">
        <IndianRupee size={12} />
        <span className="text-sm font-bold">{amount}</span>
      </div>
    </div>
    </div>
  )
}
