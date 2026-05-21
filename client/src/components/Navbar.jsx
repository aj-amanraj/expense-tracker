import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-amber-200 p-5 h-16 flex items-center justify-between w-full">
      <img className="h-14 w-fit object-contain" src={logo} alt="logo" />
      <div className=" flex items-center gap-2 justify-center">
        <Avatar src="/broken-image.jpg" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-gray-800">Aman Raj</p>
          <p className="text-xs text-gray-500">amanraj2807aj@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
