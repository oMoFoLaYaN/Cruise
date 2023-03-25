import React from "react";
import { sponsors } from "../constants";
import { layout } from "../style";
import ScrollAnimate from "../ScrollAnimate";

const Sponsors = () => (
  <section className={`sponsor ${layout.section}`} section>
    <ScrollAnimate x="0" y="-60" t="2.5">
      <div
        className={`grid-cols-[repeat(auto-fit,minmax(110px,1fr))] justify-items-center gap-y-14 grid gap-6 ${layout.container}`}
      >
        {sponsors.map((sponsors) => (
          <div key={sponsors.id} className="sponsor__content">
            <img
              src={sponsors.logo}
              alt={sponsors.id}
              className="w-[90px]  duration-100 grayscale hover:grayscale-0 dark:brightness-[10] hover:dark:brightness-100"
            />
          </div>
        ))}
      </div>
    </ScrollAnimate>
  </section>
);

export default Sponsors;
