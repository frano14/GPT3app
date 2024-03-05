import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between md:py-6 py-4 items-center">
      <div className="flex">
        <img src={logo} alt="logo" className="w-[62px] h-auto md:mr-10 mr-6" />
        <ul className="sm:flex hidden flex-row md:gap-3 gap-1 text-white list-none">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-manrope  font-extralight cursor-pointer md:text-[16px] text-[12px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="sm:flex hidden flex-center items-center">
          <p className="font-manrope font-extralight cursor-pointer md:text-[16px] text-[12px] text-white mr-4">
            Sign in
          </p>
          <button className="sm:block hidden bg-orange  rounded-[5px] font-manrope font-extralight md:w-[152px] w-[114px] md:h-[58px] h-[43px] text-white  md:text-[16px] text-[12px]">
            Sign up
          </button>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 flex flex-col gap-4 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-orange`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-light cursor-pointer text-white text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <p className="font-poppins font-extralight cursor-pointer text-[16px] text-white mr-4">
              Sign in
            </p>
            <p className="font-poppins font-extralight cursor-pointer text-[16px] text-white mr-4">
              Sign up
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
