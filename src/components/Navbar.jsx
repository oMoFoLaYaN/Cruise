import React from 'react'
import { useState, useEffect } from 'react';
import { navLinks } from "../constants";
import { layout } from '../style';
import Theme from './Theme';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState("bg-transparent")
  const [color, setColor] = useState("[color:var(--white-color)]")
  const close = "ri-close-line";
  const menu = "ri-function-line";
  const activeLink = `before:content-[''] before:absolute before:w-full before:h-0.5 before:-bottom-3 before:left-0 before:bg-${color}`

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return [setHeader("transparent"), setColor("[color:var(--white-color)]")]
    } else if (window.scrollY > 70) {
      return [setHeader("bg-[color:var(--body-color)] shadow-lg"), setColor("[color:var(--title-color)]")]
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
    <a href="#" className={`font-bold text-lg text-${color}`}>
      Cruise
    </a>
      <ul className="md:flex hidden gap-y-10 flex-row md:gap-x-16">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className="relative md:flex md:gap-x-4 text-[color:var(--text-color-light)] 
        font-medium capitalize hover:text-[color:var(--text-color)] 
        md:text-[color:var(--white-color)] md:hover:text-[color:var(--white-color)]">

          <a href={`#${nav.id}`} className={`${
              active === nav.title ? `text-${color} ${activeLink}` : color
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-2"}`}
            onClick={() => setActive(nav.title)}
            >
          {nav.title}
          </a>
          </li>
        ))}
        <Theme color={color}/>
      </ul>
      
      <div className="md:hidden flex flex-1 justify-end items-center">
        <i className={`w-7 h-7 text-xl text-${color} object-contain ${toggle ? close : menu}`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[color:var(--body-color)] shadow-lg absolute top-0 right-0 w-9/12 h-screen -z-10 sidebar`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col my-8 mx-8">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium uppercase cursor-pointer text-base ${
                  active === nav.title ? "text-[color:var(--title-color)" : "text-amber-900"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Theme color="text-[color:var(--title-color) absolute bottom-24 text-xl"/>
          </ul>
        </div>
      </div>

  </nav>
</header>
)
}


export default Navbar
