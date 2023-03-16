import React from 'react'
import { useState } from 'react';
import { navLinks } from "../constants";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


return (
    <header className="header" id="header">
  <nav className=" h-12 flex justify-between items-center md:h-[1.5rem] container">
    <a href="#" className="text-white font-medium">
      Cruise
    </a>
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className="nav__item">
          <a href={`#${nav.id}`} className="nav__link active-link">
          {nav.title}
          </a>
        </li>
        ))}
      </ul>
      
       <i className="ri-close-line nav__close" id="nav-close" />
    </div>

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