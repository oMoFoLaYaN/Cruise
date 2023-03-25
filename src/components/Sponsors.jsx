import React from 'react'
import { sponsors } from "../constants";
import { layout } from '../style';
import { Fade } from 'react-reveal';

const Sponsors = () => (
    <section className={`sponsor ${layout.section}`} section>
  <div className={`grid-cols-[repeat(auto-fit,minmax(110px,1fr))] justify-items-center gap-y-14 grid gap-6 ${layout.container}`}>
  <Fade 
        duration={2800} 
        top
        distance="60px"
        cascade
        interval="100"
      >
  {sponsors.map((sponsors) => (
    <div key={sponsors.id} className="sponsor__content">
      <img src={sponsors.logo} alt={sponsors.id} className="w-[90px]  duration-100 grayscale hover:grayscale-0 dark:brightness-[10] hover:dark:brightness-100" />
    </div>
    ))}
</Fade>
  </div>
</section>

  )

export default Sponsors