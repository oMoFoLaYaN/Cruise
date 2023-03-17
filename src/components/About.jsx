import React from 'react'
import { about1, about2 } from "../assets";
import Button from './Button';
import styles from '../style';

const About = () => (
    <section className={`about `} id="about">
  <div className="about__container container grid gap-6">
    <div className="about__data">
      <h2 className="section__title about__title">
        More Information <br /> About The Best Beaches
      </h2>
      <p className="about__description">
        You can find the most beautiful and pleasant places at the best prices
        with special discounts, you choose the place we will guide you all the
        way to wait, get your place now.
      </p>
        <Button name="Reserve a place"/>
    </div>
    <div className="about__img">
      <div className="about__img-overlay">
        <img src={about1} alt="" className="about__img-one" />
      </div>
      <div className="about__img-overlay">
        <img src={about2} alt="" className="about__img-two" />
      </div>
    </div>
  </div>
</section>

  )
export default About