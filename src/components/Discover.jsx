import React from 'react'
import { discover } from "../constants";
import { layout } from '../style';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";

const Discover = () => (
    <section className={`discover ${layout.section}`} id="discover">
    <h2 className={`${layout.sectionTitle}`}>
      Discover the most <br /> attractive places
    </h2>
    <div className={`md:w-[600px] md:mx-auto lg:w-[700px] ${layout.container}`} >
      <div className="swiper-wrapper">


      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={32}
        loop={true}
        coverflowEffect={{
          rotate: 0,
        }}
        modules={[EffectCoverflow]}
        className="swiper-wrapper"

        >     {discover.map((discover) => (
       <SwiperSlide className="relative w-[200px] overflow-hidden lg:w-[237px] swiper-slide">
          <img
            key={discover.id}
            src={discover.img}
            alt={discover.id}
            className="duration-300 hover:scale-110 rounded-md"
          />
          <div className="absolute left-4 bottom-6 lg:left-6 lg:bottom-8">
            <h2 className="text-[length:var(--h3-font-size)] mb-1 lg:text-[length:var(--h2-font-size)] text-water-100">{discover.name}</h2>
            <span className="block text-[length:var(--smaller-font-size)] text-water-100">{discover.time}</span>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      </div>
    </div>
  </section>

  )

export default Discover