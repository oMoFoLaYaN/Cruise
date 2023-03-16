import React from 'react'
import { socialMedia } from "../constants";

const Social = (props) => (
    <div className="home__social">
    {socialMedia.map((social, index) => (
      <a key={social.id}
        href={social.link}
        target="_blank"
        className="home__social-link"
      >
        <i className={`${props.color} ${social.icon}`} />
      </a>
    ))}
    </div>
  )

export default Social