import React from 'react'
import { home1, home2 } from "../assets";
import { Social } from "../components";
import Button from './Button';
import { layout } from '../style';
import Fade from 'react-reveal/Fade';

const Hero = () => (
  <section className="home" id="home">
  <img src={home1} alt="" className="absolute w-full object-cover object-[83%] left-0 top-0 h-[640px]" />
  <Fade 
        duration={2800} 
        top 
        ssrReveal={true}
        distance="60px"
      >
<div className={`relative ${layout.container} sm:mt-10 md:mt-36 lg:mt-12 gap-y-12 content-center grid gap-6 xl:grid-rows-[2fr_0.5fr] `}>
    <div className="md:self-end leading-tight">
      <span className="text-water-100 block font-medium mb-3">Discover your place</span>
      <h1 className="text-[length:var(--biggest-font-size)] font-medium mb-10 text-water-100 dark:text-water-100">
        Explore The <br /> Best <b>Beautiful<br />Beaches</b>
      </h1>
        <Button name="Explore"/>
    </div>
        <Social 
        className="flex flex-col gap-y-6 md:flex-row 
        md:self-end md:gap-x-10 md:my-12"
        color="text-water-100"
        />
    <div className="bg-water-600 flex items-center gap-x-2 absolute w-[240px] px-4 py-6 right-0 bottom-0 md:bottom-10 lg:w-[328px] lg:grid-cols-[1fr_2fr] lg:gap-x-8 text-water-100">
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
        <img src={home2} alt="" className="w-24 duration-300 hover:scale-110 lg:w-60" />
      </div>
    </div>
  </div>
  </Fade>
</section>
)

export default Hero