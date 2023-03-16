import React from 'react'
import { home1, home2 } from "../assets";
import { Social } from "../components";
import Button from './Button';
import styles from '../style';


const Hero = () => (
    <section className="home" id="home">
  <img src={home1} alt="" className="absolute w-full h-screen object-cover object-[83%] left-0 top-0" />
  <div className={`relative h-[calc(100vh-3rem)] content-center gap-y-12 md:h-screen md:grid-rows-[1.8fr_0.5fr] lg:grid-rows-[2fr_0.5fr] ${styles.container} grid gap-6`}>
    <div className="home__data">
      <span className="home__data-subtitle">Discover your place</span>
      <h1 className="home__data-title ">
        Explore The <br /> Best
        <b>
          Beautiful <br /> Beaches
        </b>
      </h1>
        <Button name="Explore"/>
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