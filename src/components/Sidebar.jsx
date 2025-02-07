import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { GiFoxTail } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { VscHome } from "react-icons/vsc";
import { VscOrganization } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  // State to determine if the sidebar is expanded or minimized
  const [isExpanded, setIsExpanded] = useState(true);

  // Toggle the sidebar's state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main
      className={`p-5 h-screen text-white bg-slate-800 transition-all duration-300 ${
        isExpanded ? 'w-[20%]' : 'w-20'
      }`}
    >
      {/* Header with title and toggle button */}
      <div className="flex justify-between items-center">
        {isExpanded && <h1 className="rounded-xl font-bold text-lg">Sidebar</h1>}
        <button onClick={toggleSidebar} className="text-xl focus:outline-none">
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="mt-8 flex flex-col gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md"
        >
          <VscHome />
          {isExpanded && <span>Home</span>}
        </Link>

        <Link
          to="/product"
          className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md"
        >
          <AiOutlineProduct />
          {isExpanded && <span>Product</span>}
        </Link>

        <div className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md">
          <BsHandbag />
          {isExpanded && <span>Handbag</span>}
        </div>

        <div className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md">
          <GiFoxTail />
          {isExpanded && <span>Wigs</span>}
        </div>

        <Link
          to="/transactions"
          className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md"
        >
          <GrTransaction />
          {isExpanded && <span>Transactions</span>}
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-2 text-xl font-semibold py-2 hover:bg-slate-700 p-2 rounded-md"
        >
          <VscOrganization />
          {isExpanded && <span>About Us</span>}
        </Link>
      </div>
    </main>
  );
};

export default Sidebar;
