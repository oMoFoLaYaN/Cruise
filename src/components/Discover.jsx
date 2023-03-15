import React from 'react'
import { discover } from "../constants";

const Discover = () => (
    <section className="discover section" id="discover">
    <h2 className="section__title">
      Discover the most <br /> attractive places
    </h2>
    <div className="discover__container container swiper-container">
      <div className="swiper-wrapper">

        {discover.map((discover, index) => (
        <div className="discover__card swiper-slide">
          <img
            key={discover.id}
            src={discover.img}
            alt={discover.id}
            className="discover__img"
          />
          <div className="discover__data">
            <h2 className="discover__title">{discover.name}</h2>
            <span className="discover__description">{discover.time}</span>
          </div>
        </div>
        ))}

      </div>
    </div>
  </section>

  )

export default Discover