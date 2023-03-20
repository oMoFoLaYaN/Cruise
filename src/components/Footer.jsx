import React from 'react'
import { Social } from "../components";
import { footerLinks } from "../constants";
import { layout } from '../style';

const Footer = () => {
  return (
    <footer className={`footer ${layout.section}`}>
  <div className={`gap-y-20 ${layout.container} grid gap-6`}>
    <div className="grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-8 lg:justify-items-center grid gap-6">
      <div className="footer__data">
        <h3 className="footer__title mb-2 text-[length:var(--h3-font-size)]">Cruise</h3>
        <p className="footer__description mb-8">
          Cruise, You choose the <br /> destination, we offer you the <br />{" "}
          experience.
        </p>
        <div>
            <Social
            color="text-xl text-[color:var(--title-color)] mr-5"
            />
        </div>
      </div>

      {footerLinks.map((footerlink) => (
      <div key={footerlink.title} className="footer__data">
        <h3 className="footer__subtitle mb-4 text-[length:var(--h3-font-size)]">{footerlink.title}</h3>
        <ul>
          {footerlink.links.map((link, index) => (
          <li key={link.name} className="footer__item mb-3">
            <a href="" className="footer__link text-[color:var(--text-color)] hover:text-[color:var(--title-color)]">
            {link.name}
            </a>
          </li>
          ))}
        </ul>
      </div>
       ))}

    </div>
    <div className="footer__rights flex flex-col gap-y-6 text-center md:flex-row md:justify-between">
      <p className="footer__copy text-[length:var(--small-font-size)] text-[color:var(--text-color-light)]">Adeayodev &amp; bedimcode</p>
      <div className="footer__terms flex gap-x-6 justify-center hover:text-[color:var(--text-color)]">
        <a href="#" className="footer__terms-link text-[length:var(--small-font-size)] text-[color:var(--text-color-light)]">
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