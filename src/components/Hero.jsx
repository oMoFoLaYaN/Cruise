import React from 'react'
import { home1, home2 } from "../assets";
import { Social } from "../components";
import Button from './Button';
import styles from '../style';


const Hero = () => (
    <section className="home" id="home">
  <img src={home1} alt="" className="absolute w-full h-screen object-cover object-[83%] left-0 top-0" />
  <div className={`relative h-[calc(100vh-3rem)] content-center gap-y-12 md:h-screen md:grid-rows-[1.8fr_0.5fr] lg:grid-rows-[2fr_0.5fr] ${styles.container} grid gap-6`}>
    <div className="md:self-end">
      <span className="text-[color:var(--white-color)] block font-medium mb-3">Discover your place</span>
      <h1 className="text-[length:var(--biggest-font-size)] font-medium mb-10 text-[color:var(--white-color)]">
        Explore The <br /> Best
        <b>
          Beautiful <br /> Beaches
        </b>
      </h1>
        <Button name="Explore"/>
    </div>
        <Social 
        color="text-[color:var(--white-color)]"
        />
    <div className="bg-[color:var(--first-color)] flex items-center gap-x-2 absolute w-56 px-4 py-6 right-0 bottom-4 md:bottom-12 lg:w-80 lg:grid-cols-[1fr_2fr] lg:gap-x-8 text-[color:var(--white-color)]">
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