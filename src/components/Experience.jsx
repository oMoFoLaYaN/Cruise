import React from 'react'
import { experience1, experience2 } from '../assets'
import { experience } from "../constants";

const Experience = () => (
    <section className="experience section">
  <h2 className="section__title">
    With Our Experience <br /> We Will Serve You
  </h2>


  <div className="experience__container container grid">
    <div className="experience__content grid">
    {experience.map((experience, index) => (
      <div key={experience.id} className="experience__data">
        <h2 className="experience__number">{experience.value}</h2>
        <span className="experience__description">
          {experience.title1} <br /> {experience.title2}
        </span>
      </div>
      ))}
    </div>


    <div className="experience__img grid">
      <div className="experience__overlay">
        <img
          src={experience1}
          alt=""
          className="experience__img-one"
        />
      </div>
      <div className="experience__overlay">
        <img
          src={experience2}
          alt=""
          className="experience__img-two"
        />
      </div>


    </div>
  </div>
</section>

  )

export default Experience