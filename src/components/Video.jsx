import React from 'react'
import { video } from '../assets'

const Video = () => (
  <section className="video section">
  <h2 className="section__title">Video Tour</h2>
  <div className="video__container container">
    <p className="video__description">
      Find out more with our video of the most beautiful and pleasant places for
      you and your family.
    </p>
    <div className="video__content">
      <video id="video-file" loop>
        <source src={video} type="video/mp4" />
      </video>
      <button className="button button--flex video__button" id="video-button">
        <i className="ri-play-line video__button-icon" id="video-icon" />
      </button>
    </div>
  </div>
</section>

  )

export default Video