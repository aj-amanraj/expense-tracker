import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import ExpenseCard from "./components/ExpenseCard";
import CategorySummary from "./components/CategorySummary";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 md:flex-row w-full h-full p-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between gap-5 w-full h-full">
            <ExpenseCard />
            <ExpenseCard />
          </div>
          <div className="bg-linear-to-r from-red-400 via-red-500 to-amber-800 w-full h-full rounded-xl min-h-36"></div>
        </div>
        <CategorySummary />
      </div>
    </div>
  );
};

export default App;
