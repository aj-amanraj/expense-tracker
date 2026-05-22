import { IndianRupee } from "lucide-react";

const ExpenseCard = ({title = "Expense", subtitle, value, Icon}) => {
  return (
    <div className="p-5 bg-linear-to-r flex-1 from-purple-700 via-purple-500 to-purple-500 shadow-xl w-full rounded-lg flex flex-col justify-between items-center ">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-start w-full">
          <h3 className="text-xl text-white font-bold font-mono">{title}</h3>
          <p className="text-gray-200 text-[12px] max-w-24">{subtitle}</p>
        </div>

        <div className="bg-white/25 h-fit text-white p-2 rounded-sm">
          <Icon size={24} />
        </div>
      </div>

      <div className="flex gap-1 items-center w-full justify-start mt-3 text-white">
        <IndianRupee size={20} className="-mb-1" />
        <span className="text-3xl font-bold">{value}</span>
      </div>
    </div>
  );
};

export default ExpenseCard;
