// @flow strict

import * as React from "react";
import logo from "../../../public/image/logo.png";
import { NavLink } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { FaUserTag } from "react-icons/fa6";
import { TbBasketSearch } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Added hamburger icon for mobile view

function Navber() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="bg-[#070242] fixed top-0 left-0 right-0 z-50">
      <div
        id="Navber"
        className="flex items-center justify-between md:justify-around px-4 md:px-0"
      >
        {/* Logo */}
        <div id="img" className="h-fit w-28 my-3">
          <img src={logo} alt="Logo" />
        </div>

        {/* Search Bar - visible on medium and larger screens */}
        <div className="hidden md:flex my-auto">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search..."
            className="w-72 border-2 bg-slate-100 border-slate-200 rounded-lg py-3 px-5 outline-none text-lg text-black font-medium"
          />
          <button>
            <TbBasketSearch className="text-[#070242] h-12 w-7 border-l-2 rounded-x bg-slate-100 border-[#070242] my-auto -ml-9" />
          </button>
        </div>

        {/* Hamburger Menu - visible on mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className="text-white h-8 w-8" />
          </button>
        </div>

        {/* Routes - hidden on mobile, visible on medium and larger screens */}
        <div id="routes" className="hidden md:flex text-white font-bold mx-5">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#eadf99] underline" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/StockProduct"
              className={({ isActive }) =>
                isActive ? "text-[#eadf99] underline" : ""
              }
            >
              <li>Stock Product</li>
            </NavLink>
            <NavLink
              to="/AddProducts"
              className={({ isActive }) =>
                isActive ? "text-[#eadf99] underline" : ""
              }
            >
              <li>Add Products</li>
            </NavLink>
            <NavLink
              to="/Support"
              className={({ isActive }) =>
                isActive ? "text-[#eadf99] underline" : ""
              }
            >
              <li>Support</li>
            </NavLink>
          </ul>
        </div>

        {/* Buttons - hidden on mobile, visible on medium and larger screens */}
        <div id="buttons" className="hidden md:flex text-white gap-4">
          <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
            LogIn
            <RiLoginCircleFill className="text-[#0f025a] h-auto w-8 hover:text-[#ff6600]" />
          </button>
          <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
            <MdShoppingCart className="text-[#0f025a] h-auto hover:text-[#fc7303] w-8" />
            Cart
          </button>
          <button className="flex text-xl font-semibold mt-2 ml-6 hover:text-[#eadf99]">
            Become a User
            <FaUserTag className="text-[#eadf99] h-auto w-8 mt-1" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu - visible on mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#070242] text-white font-bold px-4 py-3">
          <ul className="flex flex-col items-center justify-center gap-5">
            <li>
              <input
                type="search"
                id="search-mobile"
                name="search"
                placeholder="Search..."
                className="w-fit border-2 bg-slate-100 border-slate-200 rounded-lg py-3 px-5 outline-none text-lg text-black font-medium"
              />
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#eadf99] underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/StockProduct"
                className={({ isActive }) =>
                  isActive ? "text-[#eadf99] underline" : ""
                }
              >
                Stock Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddProducts"
                className={({ isActive }) =>
                  isActive ? "text-[#eadf99] underline" : ""
                }
              >
                Add Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Support"
                className={({ isActive }) =>
                  isActive ? "text-[#eadf99] underline" : ""
                }
              >
                Support
              </NavLink>
            </li>
            <li>
              <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
                LogIn
                <RiLoginCircleFill className="text-[#0f025a] h-auto w-8 hover:text-[#ff6600]" />
              </button>
            </li>
            <li>
              <button className="flex btn gap-1 btn-m my-auto hover:text-[#ff6600] font-bold">
                <MdShoppingCart className="text-[#0f025a] h-auto hover:text-[#fc7303] w-8" />
                Cart
              </button>
            </li>
            <li>
              <button className="flex text-xl font-semibold mt-2 ml-6 hover:text-[#eadf99]">
                Become a User
                <FaUserTag className="text-[#eadf99] h-auto w-8 mt-1" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navber;
