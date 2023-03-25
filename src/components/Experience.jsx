import React from "react";
import { experience1, experience2 } from "../assets";
import { experience } from "../constants";
import { layout } from "../style";
import ScrollAnimate from "../ScrollAnimate";

const Experience = () => (
  <section className={`experience ${layout.section}`}>
    <h2 className={`${layout.sectionTitle}`}>
      With Our Experience <br /> We Will Serve You
    </h2>

    <div
      className={`gap-y-10 justify-center justify-items-center grid gap-6 ${layout.container}`}
    >
      <ScrollAnimate x='0' y='-60' t='2.5' >
        <div className="grid-cols-[repeat(3,1fr)] gap-x-4 justify-items-center px-8 py-0 lg:gap-x-14 lg:mx-0 lg:my-4; grid gap-6">
          {experience.map((experience) => (
            <div key={experience.id} className="experience__data">
              <h2 className="text-[length:var(--h2-font-size)] font-medium mb-2">
                {experience.value}
              </h2>
              <span className="text-[length:var(--small-font-size)] leading-tight">
                {experience.title1} <br /> {experience.title2}
              </span>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      <ScrollAnimate x='0' y='-60' t='2.5' >
        <div className="relative pb-8 grid gap-6">
          <div className="overflow-hidden w-[263px] mr-8 md:w-[363px] md:mr-16 lg:w-[463px] lg:mr-28">
            <img
              src={experience1}
              alt=""
              className="duration-300 hover:scale-110 rounded-md"
            />
          </div>
          <div className="overflow-hidden w-[120px] absolute right-0 top-8 md:w-40 lg:w-[220px] lg:top-12">
            <img
              src={experience2}
              alt=""
              className="duration-300 hover:scale-110 rounded-md"
            />
          </div>
        </div>
      </ScrollAnimate>
    </div>
  </section>
);

export default Experience;
