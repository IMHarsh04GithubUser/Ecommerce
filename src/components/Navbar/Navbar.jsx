import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useContext } from "react";
import { EContext } from "../contextProvider/Contextprovider";

const Navbar = () => {
const {hovermouse,handleHoverUp,handleHoverDown} = useContext(EContext)

  return (
    <div className="navbar nav-container">
      <nav className="border flex p-5 gap-4 items-center justify-center ">
        <img src="" alt="Img" className="hover:cursor-pointer" />
        <form
          action=""
          className="rounded-xl bg-cyan-12 flex items-center p-3 gap-2 w-160 text-lg"
        >
          <CiSearch className="h-5 w-5" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for products, Brands and More"
            className="w-96 border-none outline-none bg-cyan-12  rounded-lg  placeholder:text-brown-12"
          />
        </form>
        <div className="Login rounded-lg flex gap-2 items-center p-3 hover:bg-blue-600 transition-all hover:cursor-pointer" onMouseEnter={handleHoverUp} onMouseLeave={handleHoverDown}>
          <FaRegCircleUser className="h-6 w-6" />
          <p>Login</p>
          {hovermouse?<IoIosArrowUp className="h-6 w-6"/>:<MdKeyboardArrowDown className="h-6 w-6" />}
        </div>
        <div className="cart flex gap-2 items-center p-3 hover:cursor-pointer hover:scale-125">
          <PiShoppingCartDuotone className="h-6 w-6"/>
          <p className="" >Cart</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
