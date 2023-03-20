import React from 'react'
import { sponsors } from "../constants";
import { layout } from '../style';

const Sponsors = () => (
    <section className={`sponsor ${layout.section}`} section>
  <div className={`grid-cols-[repeat(auto-fit,minmax(110px,1fr))] justify-items-center gap-y-14 grid gap-6 ${layout.container}`}>
    
  {sponsors.map((sponsors) => (
    <div key={sponsors.id} className="sponsor__content">
      <img src={sponsors.logo} alt={sponsors.id} className="w-[90px]  duration-300 grayscale hover:grayscale-0" />
    </div>
    ))}

  </div>
</section>

  )

export default Sponsors