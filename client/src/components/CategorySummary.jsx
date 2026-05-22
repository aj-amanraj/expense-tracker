import { IndianRupee } from "lucide-react";
import React from "react";

const CategorySummary = () => {
  return (
    <div className="bg-white border-2 p-5 border-white/5 shadow-md w-full rounded-lg">
      <div>
        <h3 className="text-2xl font-bold">Expense Summary</h3>
        <p className="text-sm text-gray-400">Category Wise</p>
      </div>

      <div className="overflow-auto flex flex-col gap-1 mt-4">
        {Array.from({length: 5}).map((_,i) => 
        <ItemCard key={i} />)}
      </div>
    </div>
  );
};

export default CategorySummary;




function ItemCard() {
  return ( 
    <div className="flex flex-col items-center">
    <div className="w-[94%] border-black/10 border " />
    <div className="flex w-full justify-between px-2 py-1">
      <h4 className="uppercase font-semibold">Shopping:</h4>
      <div className="flex items-center">
        <IndianRupee size={12} />
        <span className="text-sm font-bold">120</span>
      </div>
    </div>
    </div>
  )
}
