import React from 'react'
import { socialMedia } from "../constants";

const Social = (props) => (
    <div className="flex flex-col gap-y-6 md:flex-row md:self-end md:gap-x-10 md:mb-12">
    {socialMedia.map((social, index) => (
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