import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiUserCircleThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center px-20">
      <div className="text-2xl text-yellow-300 font-bold cursor-pointer">
        <Link to="/">Joydas</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-white hover:text-yellow-400"
          >
            <HiOutlineShoppingBag />
            <span>Cart</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className="flex items-center gap-2 text-white hover:text-yellow-400"
          >
            <PiUserCircleThin />
            <span>User</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
