import React from 'react'
import { useState } from 'react';
import { navLinks } from "../constants";
import { layout } from '../style';
import Theme from './Theme';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const close = "ri-close-line";
  const menu = "ri-function-line";


return (
    <header className="w-full fixed z-[100] bg-transparent left-0 top-0" id="header">
  <nav className={`h-12 flex justify-between items-center md:h-[18] ${layout.container}`}>
    <a href="#" className="font-medium text-[color:var(--white-color)] bg-slate-600">
      Cruise
    </a>
      <ul className="sm:flex hidden gap-y-10 flex-row sm:gap-x-14 md:gap-x-16">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className="relative md:flex md:gap-x-4 text-[color:var(--text-color-light)] 
        font-medium capitalize hover:text-[color:var(--text-color)] 
        md:text-[color:var(--white-color)] md:hover:text-[color:var(--white-color)]">

          <a href={`#${nav.id}`} className={`${
              active === nav.title ? "text-white" : "text-red-500"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-2"}`}
            onClick={() => setActive(nav.title)}
            >
          {nav.title}
          </a>
          </li>
        ))}
        <Theme/>
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <i className={`w-[28px] h-[28px] object-contain ${toggle ? close : menu}`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-teal-300 absolute top-0 right-0 w-9/12 h-screen -z-10 sidebar`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-base ${
                  active === nav.title ? "text-white" : "text-amber-900"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Theme/>
          </ul>
        </div>
      </div>

  </nav>
</header>
)
}

export default Navbar


{/* <i className="ri-close-line nav__close" id="nav-close" />

<div className="nav__dark">
    <i className="ri-moon-line change-theme" id="theme-button" />
</div>

<div className="nav__toggle" id="nav-toggle">
  <i className="ri-function-line" />
</div> */}