import React from 'react'
import { socialMedia } from "../constants";

const Social = (props) => (
    <div className={`${props.className}`}>
    {socialMedia.map((social) => (
      <a key={social.id}
        href={social.link}
        target="_blank"
        className="text-xl w-max"
      >
        <i className={`${props.color} ${social.icon}`} />
      </a>
    ))}
    </div>
  )

export default Social