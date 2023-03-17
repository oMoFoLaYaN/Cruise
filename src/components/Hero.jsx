import React from 'react'
import { home1, home2 } from "../assets";
import { Social } from "../components";
import Button from './Button';
import styles from '../style';


const Hero = () => (
    <section className="home" id="home">
  <img src={home1} alt="" className="absolute w-full object-cover object-[83%] left-0 top-0 h-[640px]" />
  <div className={`relative max-w-5xl m-auto content-center gap-y-12 md:grid-rows-[1.8fr_0.5fr] lg:grid-rows-[2fr_0.5fr] ${styles.container} grid gap-6`}>
    <div className="md:self-end">
      <span className="text-[color:var(--white-color)] block font-medium mb-3">Discover your place</span>
      <h1 className="text-[length:var(--biggest-font-size)] font-medium mb-10 text-[color:var(--white-color)]">
        Explore The <br /> Best <b>Beautiful<br />Beaches</b>
      </h1>
        <Button name="Explore"/>
    </div>
        <Social 
        className="flex flex-col gap-y-6 md:flex-row 
        md:self-end md:gap-x-10 md:mb-12"
        color="text-[color:var(--white-color)]"
        />
    <div className="bg-[color:var(--first-color)] flex items-center gap-x-2 absolute w-56 px-4 py-6 right-0 bottom-4 md:bottom-10 lg:w-80 lg:grid-cols-[1fr_2fr] lg:gap-x-8 text-[color:var(--white-color)]">
      <div>
        <span className="block text-[length:var(--small-font-size)] font-medium mb-3 lg:text-[length:var(--normal-font-size)]">5 best places to visit</span>
        <a
          href=""
          className={`flex items-center gap-x-1 p-0 hover:bg-none text-[length:var(--smaller-font-size)]`}
        >
          More <i className="ri-arrow-right-line" />
        </a>
      </div>
      <div className="overflow-hidden">
        <img src={home2} alt="" className="w-36 duration-300 hover:scale-110 lg:w-60" />
      </div>
    </div>
  </div>
</section>

  )

export default Hero