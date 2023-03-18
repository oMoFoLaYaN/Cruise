import React from 'react'
import { place } from "../constants";
import styles, { layout } from '../style';
const Place = () => {
  return (
    <section className={`place ${layout.section}`} id="place">
  <h2 className={`${layout.sectionTitle}`}>Choose Your Place</h2>
  <div className={`grid-cols-[repeat(2,max-content)] justify-center lg:gap-[3rem_2rem] grid gap-6 ${layout.container}`}>
    
    {place.map((place) => (
    <div key={place.id} className="h-[230px] lg:h-[263px] relative overflow-hidden">
      <img src={place.img} alt={place.id} className="h-[230px] lg:h-[263px] duration-300 hover:scale-110" />
      <div className="absolute w-full h-full flex flex-col justify-between pt-3 pb-4 px-3 left-0 top-0 text-[color:var(--white-color)]">
        <span className="self-end flex items-center">
          <i className="ri-star-line text-xs mr-1" />
          <span className="text-[length:var(--small-font-size)]">{place.rating}</span>
        </span>
        <div className="place__data">
          <h3 className="text-[length:var(--h3-font-size)] mb-1 text-[color:var(--white-color)]">{place.name}</h3>
          <span className="text-[length:var(--smaller-font-size)] mb-5 block">{place.country}</span>
          <span className="absolute px-4 py-3 right-0 bottom-0 block">{place.price}</span>
        </div>
      </div>
      <button className={`${styles.button} flex items-center gap-x-1 place__button`}>
        <i className="ri-arrow-right-line" />
      </button>
    </div>
    ))}

  </div>
</section>

  )
}

export default Place