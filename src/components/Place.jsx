import React from 'react'
import { place } from "../constants";
import { layout } from '../style';
import { Fade } from 'react-reveal';

const Place = () => {
  return (
    <section className={`place ${layout.section}`} id="places">
  <h2 className={`${layout.sectionTitle}`}>Choose Your Place</h2>
  <Fade 
        duration={1000} 
        top
        ssrReveal={true}
        distance="60px"
        cascade
        interval="10"
      >
  <div className={`sm:grid-cols-[repeat(2,max-content)] grid-cols-[repeat(1,max-content)] lg:grid-cols-[repeat(3,max-content)] justify-center lg:gap-[3rem_2rem] grid gap-6 ${layout.container}`}>
    
    {place.map((place) => (
    <div key={place.id} className="h-[230px] lg:h-[263px] relative overflow-hidden rounded-md group">
      <img src={place.img} alt={place.id} className="h-[230px] lg:h-[263px] duration-300 group-hover:scale-110" />
      <div className="absolute w-full h-full flex flex-col justify-between pt-3 pb-4 px-3 left-0 top-0 text-water-100">
        <span className="self-end flex items-center">
          <i className="ri-star-line text-xs mr-1" />
          <span className="text-[length:var(--small-font-size)]">{place.rating}</span>
        </span>
        <div className="place__data">
          <h3 className="text-[length:var(--h3-font-size)] mb-2 text-water-100 dark:text-water-100">{place.name}</h3>
          <span className="text-[length:var(--smaller-font-size)] mb-8 -mt-2  block">{place.country}</span>
          <span className="absolute px-4 py-3 left-0 bottom-0 block">{place.price}</span>
        </div>
      </div>
      <button className={`inline-block rounded-tl-md bg-water-600 text-water-100 font-medium duration-300  hover:bg-water-700 items-center gap-x-1 absolute px-4 py-3 right-0 bottom-0`}>
        <i className="ri-arrow-right-line" />
      </button>
    </div>
    ))}

  </div>
  </Fade>
</section>

  )
}

export default Place