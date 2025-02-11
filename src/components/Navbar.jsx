import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiUserCircleThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import Cartdropdown from "./Cartdropdown";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartCount);
  console.log(cart);
  const cartitem = useSelector((state) => state.cart.cartitem);
  console.log(cartitem);

  return (
    <nav className="bg-slate-800 h-[50px] p-4 flex justify-between items-center px-20">
      <div className="text-2xl text-yellow-300 font-bold cursor-pointer">
        <Link to="/">Joydas</Link>
      </div>
      <ul className="flex items-center space-x-4 w-[60px] h-[60px]">
        <li>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-white hover:text-yellow-400 hover:underline"
          
          >
          <PiShoppingCartThin />
          {cart}
        
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
