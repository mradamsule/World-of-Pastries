import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../assets/logo.jpeg";

export default function Navbar({ count }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to='/' className="w-24 h-12 flex items-center">
          <img src={Logo} alt="Logo" className="h-full object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <NavItems />
        </ul>

       
        <div className="flex items-center gap-5">
         
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative transition-colors ${
                isActive ? "text-orange-600" : "hover:text-orange-500"
              }`
            }
          >
            <ShoppingCart className="w-7 h-7" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                {count}
              </span>
            )}
          </NavLink>

          
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>


      <ul
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 border-b 
          ${open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-6 px-5 text-lg font-medium">
          <NavItems />
        </div>
      </ul>
    </nav>
  );
}


/* ------------------ Nav Items ------------------ */

function NavItems() {
  const linkBase =
    "transition-colors hover:text-orange-500";

  const activeClass = "text-orange-600 font-semibold";

  return (
    <>
      <li>
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? activeClass : linkBase
        }>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? activeClass : linkBase
        }>
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/services" className={({ isActive }) =>
          isActive ? activeClass : linkBase
        }>
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className={({ isActive }) =>
          isActive ? activeClass : linkBase
        }>
          Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? activeClass : linkBase
        }>
          Contact
        </NavLink>
      </li>
    </>
  );
}
