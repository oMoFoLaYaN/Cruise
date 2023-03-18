import React from 'react'
import { video } from '../assets'
import styles, { layout } from '../style'

const Video = () => (
  <section className={`video ${layout.section}`}>
  <h2 className={`${layout.sectionTitle}`}>Video Tour</h2>
  <div className={`pb-4 lg:grid-cols-[0.7fr] sm:justify-center sm:grid-cols-[0.6fr] grid ${layout.container}`}>
    <p className="text-center mb-10 lg:px-32 lg:py-0">
      Find out more with our video of the most beautiful and pleasant places for
      you and your family.
    </p>
    <div className="relative">
      <video id="video-file" loop>
        <source src={video} type="video/mp4" />
      </video>
      <button className={`${styles.button} flex items-center gap-x-1 absolute bottom-[-1rem] px-6 py-4 right-4`} id="video-button">
        <i className="ri-play-line text-[1.2rem]" id="video-icon" />
      </button>
    </div>
  </div>
</section>

  )

export default Video