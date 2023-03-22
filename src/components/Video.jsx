import React, { useState, useRef } from 'react';
import { video } from '../assets'
import styles, { layout } from '../style'

const Video = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
          if (isPlaying) {
              videoRef.current.pause();
          } else {
              videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
      };

return (
<section className={`video ${layout.section}`}>
  <h2 className={`${layout.sectionTitle}`}>Video Tour</h2>
  <div className={`pb-4 lg:grid-cols-[0.7fr] justify-center md:grid-cols-[0.6fr] grid ${layout.container}`}>
    <p className="text-center mb-10 lg:px-32 lg:py-0">
      Find out more with our video of the most beautiful and pleasant places for
      you and your family.
    </p>
    <div className="relative">
      <video id="video-file" loop ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
      <button className={`${styles.button} flex items-center gap-x-1 absolute bottom-[-1rem] sm:px-3 sm:py-2 right-4`} id="video-button" onClick={togglePlay}>
        <i className={`${isPlaying ? "ri-pause-line" : "ri-play-line"} text-xl`} id="video-icon" />
      </button>
    </div>
  </div>
</section>

  )
}
export default Video