import React from 'react'
import { useState } from 'react';
import { navLinks } from "../constants";
import { layout } from '../style';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


return (
    <header className="w-full fixed z-[100] bg-transparent left-0 top-0" id="header">
  <nav className={`h-12 flex justify-between items-center md:h-[18] ${layout.container}`}>
    <a href="#" className="font-medium text-[color:var(--white-color)] bg-slate-600">
      Cruise
    </a>
      <ul className="flex flex-col gap-y-10 md:flex-row md:gap-x-16">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className="relative md:flex md:gap-x-4">
          <a href={`#${nav.id}`} className="text-[color:var(--text-color-light)] 
          font-medium capitalize hover:text-[color:var(--text-color)] 
          md:text-[color:var(--white-color)] md:hover:text-[color:var(--white-color)] 
          relative  before:content-[''] before:absolute before:bg-[color:var(--title-color)] 
          before:w-full before:h-0.5 before:-bottom-3 before:left-0 
          md:before:bg-[color:var(--white-color)];">
          {nav.title}
          </a>
        </li>
        ))}
      </ul>
      
       <i className="ri-close-line nav__close" id="nav-close" />

    <div className="nav__dark">
        <i className="ri-moon-line change-theme" id="theme-button" />
    </div>

    <div className="nav__toggle" id="nav-toggle">
      <i className="ri-function-line" />
    </div>

  </nav>
</header>
)
}

export default Navbar