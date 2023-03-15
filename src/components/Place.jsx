import React from 'react'
import { place } from "../constants";

const Place = () => {
  return (
    <section className="place section" id="place">
  <h2 className="section__title">Choose Your Place</h2>
  <div className="place__container container grid">
    
    {place.map((place, index) => (
    <div key={place.id} className="place__card">
      <img src={place.img} alt={place.id} className="place__img" />
      <div className="place__content">
        <span className="place__rating">
          <i className="ri-star-line place__rating-icon" />
          <span className="place__rating-number">{place.rating}</span>
        </span>
        <div className="place__data">
          <h3 className="place__title">{place.name}</h3>
          <span className="place__subtitle">{place.country}</span>
          <span className="place__price">{place.price}</span>
        </div>
      </div>
      <button className="button button--flex place__button">
        <i className="ri-arrow-right-line" />
      </button>
    </div>
    ))}

  </div>
</section>

  )
}

export default Place