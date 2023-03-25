import React from "react";
import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { layout } from "../style";
import Theme from "./Theme";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState("bg-transparent");
  const [color, setColor] = useState("water-100");
  const close = "ri-close-line text-water-700";
  const menu = `ri-function-line text-${color}`;

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return [setHeader("transparent"), setColor("water-100")];
    } else if (window.scrollY > 70) {
      return [
        setHeader("bg-water-100 dark:bg-water-900 shadow-lg"),
        setColor("water-700 dark:text-water-100"),
      ];
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={`w-full fixed z-[100] ${header} left-0 top-0`}
      id="header"
    >
      <nav
        className={`h-12 md:h-[4.5rem] flex justify-between items-center ${layout.container}`}
      >
        <a
          href="#"
          className={`font-bold text-lg text-${color} dark:text-water-100`}
        >
          Cruise
        </a>
        <ul className="md:flex hidden gap-y-10 flex-row md:gap-x-16">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="relative md:flex md:gap-x-4 text-water-400 
        font-medium capitalize hover:text-water-500 
        md:text-water-100 md:hover:text-water-100 "
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title
                    ? `text-${color} dark:text-water-100 font-semibold underline decoration-${color} 
              decoration-double decoration-1 underline-offset-8 duration-700 dark:decoration-water-100`
                    : `text-${color} dark:text-water-100`
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-2"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <Theme color={`text-${color}`} />
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <Theme color={`text-${color}`} />
          <i
            className={`w-7 h-7 text-xl dark:text-water-100 cursor-pointer ml-10 object-contain ${
              toggle ? close : menu
            }`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-water-200 dark:bg-water-900 shadow-lg absolute top-0 right-0 w-9/12 h-screen -z-10 sidebar`}
          >
            <ul className="list-none flex justify-start items-start flex-1 flex-col my-8 mx-8">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium capitalize cursor-pointer text-base ${
                    active === nav.title
                      ? `text-water-700 dark:text-water-100 font-semibold underline decoration-water-700  
                    decoration-double decoration-1 underline-offset-8 duration-700 dark:decoration-water-100`
                      : `text-water-700 dark:text-water-100`
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
