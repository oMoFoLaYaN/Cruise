import React from 'react'
import { home1, home2 } from "../assets";
import { Social } from "../components";


const Hero = () => (
    <section className="home" id="home">
  <img src={home1} alt="" className="home__img" />
  <div className="home__container container grid gap-6">
    <div className="home__data">
      <span className="home__data-subtitle">Discover your place</span>
      <h1 className="home__data-title ">
        Explore The <br /> Best
        <b>
          Beautiful <br /> Beaches
        </b>
      </h1>
      <a href="#" className="button">
        Explore
      </a>
    </div>
        <Social/>
    <div className="home__info">
      <div>
        <span className="home__info-title">5 best places to visit</span>
        <a
          href=""
          className="button button--flex button--link home__info-button"
        >
          More <i className="ri-arrow-right-line" />
        </a>
      </div>
      <div className="home__info-overlay">
        <img src={home2} alt="" className="home__info-img" />
      </div>
    </div>
  </div>
</section>

  )

export default Hero