import React from "react";
import { about1, about2 } from "../assets";
import Button from "./Button";
import { layout } from "../style";

const About = () => (
  <section className={`${layout.section}`} id="about">
    <div
      className={`gap-y-10 md:grid-cols-[repeat(2,1fr)] md:items-center ${layout.container} grid gap-6`}
    >
        <div className="">
          <h2 className={`${layout.sectionTitle} md:text-start`}>
            More Information <br /> About The Best Beaches
          </h2>
          <p className="mb-8">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <Button name="Reserve a place" />
        </div>
        <div className="flex gap-x-4 items-center justify-center">
          <div className="overflow-hidden">
            <img
              src={about1}
              alt=""
              className="w-[130px] lg:w-[230px] duration-300 hover:scale-110 rounded-md"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={about2}
              alt=""
              className="w-[180px] lg:w-[290px] duration-300 hover:scale-110 rounded-md"
            />
          </div>
        </div>
    </div>
  </section>
);
export default About;
