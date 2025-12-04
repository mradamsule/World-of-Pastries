import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        
      
        <div className="w-28 h-16">
          <img src={Logo} alt="Logo" className="h-full w-auto" />
        </div>

    
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ?  "X" : "☰"}
        
        </button>
        <ul className="hidden md:flex gap-10">
          <NavItems />
        </ul>
      </div>

    
      <ul
        className={`flex flex-col gap-6 mt-4 md:hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <NavItems />
      </ul>
    </nav>
  );
}

function NavItems() {
  return (
    <>
      <li>
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/services" className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          Contact
        </NavLink>
      </li>

       <li>
        <NavLink to="/cart" end className={({ isActive }) =>
          isActive ? "text-orange-600" : "hover:text-orange-500"
        }>
          Cart
        </NavLink>
      </li>
    </>
  );
}
