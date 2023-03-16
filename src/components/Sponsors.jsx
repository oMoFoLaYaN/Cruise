import React from 'react'
import { sponsors } from "../constants";

const Sponsors = () => (
    <section className="sponsor section">
  <div className="sponsor__container container grid gap-6">
    
  {sponsors.map((sponsors, index) => (
    <div key={sponsors.id} className="sponsor__content">
      <img src={sponsors.logo} alt={sponsors.id} className="sponsor__img" />
    </div>
    ))}

  </div>
</section>

  )

export default Sponsors