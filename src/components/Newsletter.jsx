import React from "react";
import Button from "./Button";
import { layout } from "../style";

const Newsletter = () => {
  return (
    <section className={`subcribe ${layout.section}`}>
      <div className="bg-water-600 lg:max-w-screen-lg lg:mx-auto px-0 py-10 md:p-0">
        <div
          className={`subscribe__container md:bg-water-600 md:px-0 md:py-14 ${layout.container}`}
        >
          <h2
            className={`${layout.sectionTitle} subscribe__title dark:text-water-100 text-white`}
          >
            Subscribe Our <br /> Newsletter
          </h2>
           <p className="subscribe__description text-water-100 text-center mb-10">
              Subscribe to our newsletter and get a special 30% discount.
            </p>
          <form
              action=""
              className="subscribe__form bg-water-100 dark:bg-water-900 flex justify-between p-2 md:w-[470px] md:mx-auto md:my-0 rounded-md"
            >
              <input
                type="text"
                placeholder="Enter email"
                className="subscribe__input w-[70%] bg-water-100 dark:bg-water-900 text-water-500 dark:text-water-300 pr-2 md:px-2 md:py-0 
          placeholder:text-water-500 placeholder:dark:text-water-300"
              />
              <Button name="Subscribe" />
            </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
