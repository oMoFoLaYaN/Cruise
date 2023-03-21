import React from 'react'
import { useState, useEffect } from 'react';
import { navLinks } from "../constants";
import { layout } from '../style';
import Theme from './Theme';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState("bg-transparent")
  const [color, setColor] = useState("text-[color:var(--white-color)]")
  const close = "ri-close-line";
  const menu = "ri-function-line";

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return [setHeader("transparent"), setColor("text-[color:var(--white-color)]")]
    } else if (window.scrollY > 70) {
      return [setHeader("bg-[color:var(--body-color)] shadow-lg"), setColor("text-[color:var(--title-color)]")]
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

return (
    <header className={`w-full fixed z-[100] ${header} left-0 top-0`} id="header">
  <nav className={`h-12 md:h-[4.5rem] flex justify-between items-center ${layout.container}`}>
    <a href="#" className={`font-bold text-lg ${color}`}>
      Cruise
    </a>
      <ul className="md:flex hidden gap-y-10 flex-row md:gap-x-16">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className="relative md:flex md:gap-x-4 text-[color:var(--text-color-light)] 
        font-medium capitalize hover:text-[color:var(--text-color)] 
        md:text-[color:var(--white-color)] md:hover:text-[color:var(--white-color)]">

          <a href={`#${nav.id}`} className={`${
              active === nav.title ? color : "text-teal-500"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-2"}`}
            onClick={() => setActive(nav.title)}
            >
          {nav.title}
          </a>
          </li>
        ))}
        <Theme/>
      </ul>
      
      <div className="md:hidden flex flex-1 justify-end items-center">
        <i className={`w-7 h-7 text-xl object-contain ${toggle ? close : menu}`}
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
