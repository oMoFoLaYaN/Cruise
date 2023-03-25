import React from 'react'
import { socialMedia } from "../constants";
import Fade from 'react-reveal/Fade';

const Social = (props) => (
  <Fade 
  duration={2800} 
  top 
  ssrReveal
  distance="60px"
  cascade
>
    <div className={`${props.className}`}>
    {socialMedia.map((social) => (
      <a key={social.id}
        href={social.link}
        target="_blank"
        className="text-xl w-max"
      >
        <i className={`${props.color} text-2xl hover:text-sky-500 dark:hover:text-sky-300 ${social.icon}`} />
      </a>
    ))}
    </div>
     </Fade>
  )

export default Social