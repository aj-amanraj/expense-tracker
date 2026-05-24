import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 p-5 h-18 flex items-center justify-between w-full">
     <h1 className="serif-logo text-xl text-white">
      Expense Tracker
     </h1>
      <div className=" flex items-center gap-2 justify-center">
        <Avatar alt="logo-image" className="border-1 border-white" src="https://img.magnific.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740&q=80" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-white">Aman Raj</p>
          <p className="text-xs text-gray-200">amanraj2807aj@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
