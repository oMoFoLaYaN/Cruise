import React from 'react'
import { Social } from "../components";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer section">
  <div className="footer__container container grid">
    <div className="footer__content grid">
      <div className="footer__data">
        <h3 className="footer__title">Travel</h3>
        <p className="footer__description">
          Travel you choose the <br /> destination, we offer you the <br />{" "}
          experience.
        </p>
        <div>
            <Social />
        </div>
      </div>

      {footerLinks.map((footerlink) => (
      <div key={footerlink.title} className="footer__data">
        <h3 className="footer__subtitle">{footerlink.title}</h3>
        <ul>
          {footerlink.links.map((link, index) => (
          <li key={link.name} className="footer__item">
            <a href="" className="footer__link">
            {link.name}
            </a>
          </li>
          ))}
        </ul>
      </div>
       ))}

    </div>
    <div className="footer__rights">
      <p className="footer__copy">Adeayodev &amp; bedimcode</p>
      <div className="footer__terms">
        <a href="#" className="footer__terms-link">
          Terms &amp; Agreements
        </a>
        <a href="#" className="footer__terms-link">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer