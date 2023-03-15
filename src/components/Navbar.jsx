import React from 'react'
import { navLinks } from "../constants";


const Navbar = () => {
return (
    <header className="header" id="header">
  <nav className="nav container">
    <a href="#" className="nav__logo">
      Travel
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
      <div className="nav__dark">

        
        {/* Theme change button */}
        <span className="change-theme-name">Dark mode</span>
        <i className="ri-moon-line change-theme" id="theme-button" />
      </div>
      <i className="ri-close-line nav__close" id="nav-close" />
    </div>
    <div className="nav__toggle" id="nav-toggle">
      <i className="ri-function-line" />
    </div>
  </nav>
</header>
)
}

export default Navbar